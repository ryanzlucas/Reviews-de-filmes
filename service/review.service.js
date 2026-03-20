const { Review } = require("../models");
const { Movie } = require("../models");

class reviewService {
  async criarReview(data) {
    return await Review.create(data, {
      include: [{ model: Movie, as: "movie" }],
    });
  }
  async verReviews() {
    return await Review.findAll();
  }
  async verReview(id) {
    return await Review.findOne({ where: id });
  }
  async deletarReview(id) {
    return await Review.destroy({ where: id });
  }
  async editarReview(data, id) {
    try {
      console.log("Service");
      return await Review.update(data, { where: id });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new reviewService();
