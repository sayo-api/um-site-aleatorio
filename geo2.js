const app = require("express")();

app.get('/', function(req, res) {
    res.sendFile('geo.html', {root: __dirname })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("WebSite Online na porta:", port));