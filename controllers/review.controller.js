const reviewService = require("../service/review.service");

class reviewController {
  async createController(req, res) {
    try {
      const review = await reviewService.criarReview(req.body);
      res.json({message:'Review Criada com sucesso',review});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async verReviewsController(req, res) {
    try {
      const reviews = await reviewService.verReviews();
      res.json({message:'Reviews cadastradas',reviews});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async verReviewController(req, res) {
    try {
      const review = await reviewService.verReview(req.params);
      res.json(review);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async deletarReview(req, res) {
    try {
      const review = await reviewService.deletarReview(req.params);
      res.json({ message: "Review deleta com sucesso", review });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async editarReview(req, res) {
    try {
      console.log("Controller");
      const review = await reviewService.editarReview(req.body, req.params);
      res.json({message:'Review editada com sucesso',review});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new reviewController();
