const mongoose = require('mongoose');

const usuarioSchema = require('./Schemas/usuarioSchema ');

module.exports = mongoose.model('usuario', usuarioSchema);
