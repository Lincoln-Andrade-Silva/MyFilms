require('./db/database')

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const filmeRouter = require('./routes/filmeRouter');
const pedidosRouter = require('./routes/pedidoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const loginRouter = require('./routes/loginRouter');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({'extended': false}));
app.use(express.json());
app.use('/filmes', filmeRouter);
app.use('/pedidos', pedidosRouter);
app.use('/auth', loginRouter);
app.use('/users', usuarioRouter);
app.use(function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
});

app.listen(3001, function(){
    console.log("\nFilmes \nhttp://localhost:3001/filmes");
    console.log("\nPedidos \nhttp://localhost:3001/pedidos");
    console.log("\nUsuarios \nhttp://localhost:3001/users");
})