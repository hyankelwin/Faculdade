// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var eventSchema = new mongoose.Schema({
    evento: String,
    local: String,
    data: Date,
    tipo: String,
    horario: String,
    descricao: String,
    tema: String,
    tipoEvento: String,
    cursoDirecionado: String
  });
  
  module.exports = mongoose.model('evento', eventSchema);