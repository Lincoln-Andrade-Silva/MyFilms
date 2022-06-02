var mongoose = require('mongoose');

const filmeSchema = require('./Schemas/filmeSchema'); 

module.exports = mongoose.model('Filme', filmeSchema);