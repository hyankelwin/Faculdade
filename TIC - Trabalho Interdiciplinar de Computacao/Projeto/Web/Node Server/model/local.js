// importando biblioteca do MONGDB
var mongoose = require('mongoose');
// cria uma variável que representa um schema no noSQL
var localSchema = new mongoose.Schema({
    auditorio: String,
    andar: String,
    predio: String,
  });
  
  module.exports = mongoose.model('local', localSchema);