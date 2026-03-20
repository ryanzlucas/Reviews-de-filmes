const userModel = require("../models/user.model");
const { Review } = require("../models");

class UserService {
  async findAllService() {
    return await userModel.findAll();
  }
  async findOneService(id) {
    return await userModel.findOne({ where: id });
  }

  async create(data) {
    return await userModel.create(data);
  }

  async deleteService(id) {
    return await userModel.destroy({
      where: id,
    });
  }
  async editService(data, id) {
    return await userModel.update(data, { where: id });
  }
  async usereReviews(id) {
    return await userModel.findOne({
      where: id,
      include: [{ model: Review, as: "reviews" }],
    });
  }
}

module.exports = new UserService();
