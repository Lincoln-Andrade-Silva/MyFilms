const mongoose = require('mongoose');

const URL = 'mongodb+srv://Lico:teste123@my-films.mtqfr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexação com MongoDB:'));