var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", async function(req, res){
  var usuarios = await usuario.findAll();
  res.json(usuarios);
});

app.post('/', async function(req, res){
  var resultado = await usuario.create();
  res.json(resultado);
});

app.listen(3000, function(){
  console.log("O servidor está bruto demais")
});