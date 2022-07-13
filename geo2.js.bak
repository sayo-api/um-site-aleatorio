const express = require('express');
const app = express();

app.use(express.static('site_funções'));

app.get('/', function(req, res) {
    res.sendFile('geo.html', {root: __dirname })
});

app.get('/albumfotos', function(req, res) {
    res.sendFile('albumfotos.html', {root: __dirname })
});

app.get('/pedidodenamoro', function(req, res) {
    res.sendFile('pedido.html', {root: __dirname })
});

const porta = 3000
app.listen(porta, () => console.log("site Online na porta:", porta));