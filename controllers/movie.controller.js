const  movieService=require('../service/movie.service')

class movieController{
    async getAll(req,res){
    try{const movie = await movieService.getAllmovie();
    res.json(movie)}
    catch(error){
    res.status(500).json({
    error: error.message});
    }}

    async getmovieByid(req,res){
    try{const movie = await movieService.getmovieByid(req.params.id);
    res.json(movie)}
    catch(error){
    res.status(500).json({
    error: error.message});
    }}

    async create(req,res){
    try{const user = await movieService.create(req.body);
    res.json(user);}
    catch(error){
    res.status(500).json({
    error:error.message
    });}} 
    
    async deleteByid(req, res) {
    const { id } = req.params;
    try {
    const movie = await movieService.deleteByid(id);
    res.json({
    message: "Filme deletado",
    movie
    });
    } catch (error) {
    res.status(500).json({
    error: error.message
    });}}

async update(req, res) {
  const { id } = req.params;
  const data = req.body;

  try {
    const movie = await movieService.update(id, data);

    res.json({
      message: "Filme Atualizado",
      movie
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

}
module.exports = new movieController()
