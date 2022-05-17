require('./db/database')

const express = require('express');
const morgan = require('morgan');
const filmes = require('./db.json');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({'extended': true}));
app.use(express.json());

app.get('/filmes', function(req, res) {
    res.json(filmes);
});

app.listen(3000, function(){
    console.log("\nFilmes \nhttp://localhost:3001/filmes\n\n");
    console.log("\nPedidos \nhttp://localhost:3001/pedidos\n\n");
})