const {Router} = require('express')

const reviewController = require("../controllers/review.controller")

const routes = Router()

routes.post('/',reviewController.createController);
routes.get('/',reviewController.verReviewsController);
routes.get('/:id',reviewController.verReviewController);
routes.delete('/:id',reviewController.deletarReview);
routes.put('/:id',reviewController.editarReview);



module.exports = routes