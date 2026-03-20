const { Router } = require("express");

const movieController = require("../controllers/movie.controller.js");

const routes = Router();

routes.get("/", movieController.getAll);

routes.get("/:id/reviews/users", movieController.getmovieByid);

routes.delete("/:id", movieController.deleteByid);

routes.post("/", movieController.create);

routes.put("/:id", movieController.update);

routes.get("/reviews/users", movieController.GetallMovieReviews);

module.exports = routes;
