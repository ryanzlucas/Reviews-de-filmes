const movieService = require("../service/movie.service");

class movieController {
  async getAll(req, res) {
    try {
      const movie = await movieService.getAllmovie();
      res.json({ message: "Filmes cadastrados", movie });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async getmovieByid(req, res) {
    try {
      const movie = await movieService.getmovieByid(req.params);
      res.json({message:'O filme com as reviews e usuários',movie});
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const movie = await movieService.create(req.body);
      res.json({ message: "Filme cadastrado com sucesso", movie });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async deleteByid(req, res) {
    try {
      const movie = await movieService.deleteByid(req.params);
      res.json({
        message: "Filme deletado com sucesso",
        movie,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const movie = await movieService.update(req.params, req.body);
      res.json({ message: "Filme Atualizado com sucesso", movie });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
  async GetallMovieReviews(req, res) {
    const movie = await movieService.getAllmovieReviews();
    return res.json({message:'Todos os filmes e suas respectivas reviews',movie});
  }
}
module.exports = new movieController();
