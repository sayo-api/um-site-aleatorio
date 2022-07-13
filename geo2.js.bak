const express = require('express');
const app = express();

app.use(express.static('site_funções'));

app.get('/', async (req, res) => { 
    res.sendFile('geo.html', {root: __dirname })
});

app.get('/albumfotos', async (req, res) => { 
    res.sendFile('albumfotos.html', {root: __dirname })
});

app.get('/pedidodenamoro', async (req, res) => { 
    res.sendFile('pedido.html', {root: __dirname })
});

const porta = process.env.PORT || 5000;
app.listen(porta, () => console.log("site Online na porta:", porta));