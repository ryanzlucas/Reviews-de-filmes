const { where } = require('sequelize');
const movie = require('../models/movie.model');
const { Review } = require('../models');

class movieService {
    //Mostra todos os filmes
    async getAllmovie() {
    return await movie.findAll({include : [{model : Review, as: "reviews"}]});
}
    //Busca o Filme pelo ID
    async getmovieByid(id) {
    return await movie.findByPk(id,{include : [{model : Review, as: "reviews"}]});}
    //Deleta pelo id 
    async deleteByid(id) {
    return await movie.destroy({
    where: { id: id }});}
    //Cria 
    async create(data){
    return await movie.create(data)
    }
    //Atualiza o iten ja existente 
    async update(id,data){
    return await movie.update(data,{where: {id: id}});
     }
    
    }



module.exports = new movieService();