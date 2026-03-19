const reviewService = require('../service/review.service');

class reviewController{
    async createController(req,res){
        const review = await reviewService.criarReview(req.body)
        res.json(review);
    }
    async verReviewsController(req,res){
        const reviews = await reviewService.verReviews()
        res.json(reviews);
    }
    async verReviewController(req,res){
        const review = await reviewService.verReview(req.params)
        res.json(review)
    }
    async deletarReview(req,res){
        const review = await reviewService.deletarReview(req.params)
        res.json(review);
    }  
    async editarReview(req,res){
        try {
            console.log("Controller");
            
            const review = await reviewService.editarReview(req.body,req.params)
            res.json(review);
        } catch (error) {
            console.log(error);
            
        }  
    }    
}

module.exports = new reviewController();

