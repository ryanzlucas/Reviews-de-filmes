const { where } = require("sequelize");

const { Movie, Review, User } = require("../models");

class movieService {
  async getAllmovie() {
    return await Movie.findAll({ include: [{ model: Review, as: "reviews" }] });
  }

  async getmovieByid(id) {
    return await Movie.findOne({
      where: id,
      include: [
        {
          model: Review,
          as: "reviews",
          include: [{ model: User, as: "user" }],
        },
      ],
    });
  }

  async deleteByid(id) {
    return await Movie.destroy({ where: id });
  }

  async create(data) {
    return await Movie.create(data);
  }

  async update(id, data) {
    return await Movie.update(data, { where: id });
  }
  async getAllmovieReviews() {
    return await Movie.findAll({
      include: [
        {
          model: Review,
          as: "reviews",
          include: [{ model: User, as: "user" }],
        },
      ],
    });
  }
}

module.exports = new movieService();
