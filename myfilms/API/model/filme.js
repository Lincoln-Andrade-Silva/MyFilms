var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FilmeSchema = new Schema({
    id: Number,
    nome: String,
    desc: String,
    foto: String,
    categoria: String,
    preco_aluguel: Number,
    preco_fixo: Number,
    data_lancamento: String,
    diretor: String,
    preco: Number,
    tipo: String,
    quantidade: Number 
});

module.exports = mongoose.model('FilmeModel', FilmeSchema);