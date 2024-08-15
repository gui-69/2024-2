import express from 'express';

const app = express();

app.get('/', function(req, res) {

    res.send("Oi mundo!");
})

app.get('/gui', function(req, res) {

    res.send("OI Gui!!!")
});
 
app.get('/:x', function(req, res) {
    const mensagem = "Oi"+req.params.x;
    res.send(mensagem);
});

app.get('/:nome/:sobrenome', function(req, res) {
    const mensagem = "Oi"+req.params.nome+" "+req.params.sobrenome;
    res.send(mensagem);
});


app.get('/soma/:x/:y', function(req, res) {
    const x = req.params.x;
    const y = req.params.y;
    const soma =parseFloat(req.params.x)+parseFloat(req.params.y);
    res.send("Resultado: "+soma);
});
    app.get('/mult/:m/:n', function(req, res) {
    const m = req.params.m;
    const n = req.params.n;
    const mult =parseFloat(req.params.m)*parseFloat(req.params.n);
    res.send("Resultado: "+mult);
});
    app.get('/div/:f/:j', function(req, res) {
    const f = req.params.f;
    const j = req.params.j;
    const div =parseFloat(req.params.f)/parseFloat(req.params.j);
    res.send("Resultado: "+div);
    });
    app.get('/sub/:h/:i', function(req, res) {
        const h = req.params.h;
        const i = req.params.i;
        const sub =parseFloat(req.params.h)-parseFloat(req.params.i);
        res.send("Resultado: "+sub.toFixed(2));
});
app.listen(3000);