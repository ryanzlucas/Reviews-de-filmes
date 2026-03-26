const { Router } = require("express");

const userController = require("../controllers/user.controller");

const routes = Router();

routes.get("/", userController.getAllSites);
routes.get("/:id", userController.usereReviews) ;
routes.delete("/:id", userController.deleteController);
routes.put("/:id", userController.editController);
routes.post("/", userController.create);

module.exports = routes;
