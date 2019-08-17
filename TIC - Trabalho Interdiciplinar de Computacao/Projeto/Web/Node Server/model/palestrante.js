// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var palestranteSchema = new mongoose.Schema({
    nome: String,
    empresa: String,
    descricao: String,
    url_img: String,
  });
  
  module.exports = mongoose.model('palestrante', palestranteSchema);