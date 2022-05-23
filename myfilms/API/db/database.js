const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/myfilms';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('open', function(){
  console.log('\n\nConectado ao MongoDB!');
});

con.on('error', function(){
  console.log('\n\nErro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('\n\nDesconetado do MongoDB!');
});

module.exports = db;
