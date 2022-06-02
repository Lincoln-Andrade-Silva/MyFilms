var mongoose = require('mongoose');
var filmes = require('../model/Schemas/filmeSchema')

const PedidoSchema = new mongoose.Schema({
    id: Number,
    itens:  [filmes],
    data: {type: Date, default: Date.now},
    comprador: String,
    total: Number,
});

module.exports = mongoose.model('Pedido', PedidoSchema);