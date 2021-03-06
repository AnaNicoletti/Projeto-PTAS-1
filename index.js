var express = require("express");
var app = express();
var { usuario, empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//usuario
app.get("/usuarios", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post('/usuarios', async function(req, res){
  var resultado = await usuario.create(req.body);
  res.json(resultado);
});

app.put('/usuarios/:id', async function(req, res){
  var resultado = await usuario.update(
    {
      nome: req.body.nome,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  res.json(resultado);
});

app.delete('/usuarios/:id', async function(req, res){
var resultado = await usuario.destroy(
    {
      where: {
        id: req.params.id,
      },
    });
  res.json(resultado);
});

app.get('/usuarios/:id', async function(req, res){
  var resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
});

//empresa
app.get("/empresas", async function(req, res){
  var resultado = await empresa.findAll();
  res.json(resultado);
});

app.post('/empresas', async function(req, res){
  var resultado = await empresa.create(req.body);
  res.json(resultado);
});

app.put('/empresas/:id', async function(req, res){
  var resultado = await empresa.update(
    {
      nome: req.body.nome,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  res.json(resultado);
});

app.delete('/empresas/:id', async function(req, res){
var resultado = await empresa.destroy(
    {
      where: {
        id: req.params.id,
      },
    });
  res.json(resultado);
});

app.get('/empresas/:id', async function(req, res){
  var resultado = await empresa.findByPk(req.params.id);
  res.json(resultado);
});

app.listen(3000, function(){
  console.log("O servidor está bruto demais")
});