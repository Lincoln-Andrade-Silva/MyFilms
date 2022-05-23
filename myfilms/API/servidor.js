require('./db/database')

const express = require('express');
const morgan = require('morgan');
const app = express();
const filmeRouter = require('./routes/filmeRouter');

app.use(morgan('dev'));
app.use(express.urlencoded({'extended': false}));
app.use(express.json());
app.use('/filmes', filmeRouter);

app.listen(3001, function(){
    console.log("\nFilmes \nhttp://localhost:3001/filmes");
    console.log("\nPedidos \nhttp://localhost:3001/pedidos");
})