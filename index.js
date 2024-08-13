import express from 'express';

const app = express();

app.get('/', function(req, res) {

    res.send("Oi mundo!");
})

app.get('/gui', function(req, res) {

    res.send("OI Gui!!!")
});

app.listen(3000);