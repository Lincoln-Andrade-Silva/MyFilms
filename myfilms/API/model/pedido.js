var mongoose = require('mongoose');
const filmeSchema = require('./filme')

var Schema = mongoose.Schema;

var PedidoSchema = new Schema({
    id: Number,
    itens:  [filmeSchema],
    data: {type: Date, default: Date.now},
    comprador: String,
    total: Number,
});

module.exports = mongoose.model('PedidoModel', PedidoSchema);