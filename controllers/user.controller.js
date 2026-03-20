const userService = require("../service/user.service");
const UserService = require("../service/user.service");

class userController {
  async getAllSites(req, res) {
    try {
      const users = await UserService.findAllService();
      res.json({message:'Usuários cadastrados',users});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      return res.status(201).json({message:'Usuário cadastrado com sucesso!',user});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findOneController(req, res) {
    try {
      const user = await UserService.findOne(req.params);
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteController(req, res) {
    try {
      await UserService.delete(req.params.id);
      return res.json({ message: "Usuário deletado" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async editController(req, res) {
    try {
      const user = await UserService.editService(req.body, req.params);
      return res.json({ message: "Usuário editado com sucesso!", user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async usereReviews(req, res) {
    try {
      const user = await userService.usereReviews(req.params);
      return res.json({ message: "O Usuário fez essas reviews", user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new userController();
