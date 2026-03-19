const {Router} = require('express')

const movieController = require("../controllers/movie.controller.js");

const routes = Router()

//Funcionou
routes.get("/", movieController.getAll);
//Funcionou
routes.get("/:id/reviews", movieController.getmovieByid);
//Funcionou
routes.delete("/:id", movieController.deleteByid);
//Funcionou
routes.post("/", movieController.create)

routes.put("/:id",movieController.update)


module.exports = routes
