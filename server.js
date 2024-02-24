const express = require("express");
const app = express();
console.log("linha 3 converterDataHtmlToJson.js")
const { Aluna, Contato, Despesa, Endereco, Turma, AlunaTurma, Email } = require('./src/controllers/registerData.js');
//const Aluna = require('./src/controllers/registerData.js');
console.log(Aluna)
console.log(Turma)
app.use(express.json());

app.get("/", async (req, res)=>{
    res.send("Init Page")
})
console.log("linha 12 server.js")
app.post("/createAluna", async(req, res) => {
    console.log(req.body)
    console.log("linha 15 server.js")
   await data.Aluna.create(req.body);
   res.sendStatus(201);   
 });
 app.post("/createTurma", async(req, res) => {
    console.log(req.body)
    console.log("linha 15 server.js")
   await data.Turma.create(req.body);
   res.sendStatus(201);   
 });
 app.get("/findAllAluna", async(req, res) => {
    data.Aluna.findAll()
    .then(alunas => {
      // Enviar o array de alunas como resposta JSON
      res.json(alunas);
    })
    .catch(error => {
      // Tratar o erro
      console.error(error);
      // Enviar um status de erro como resposta
      res.status(500).send("Ocorreu um erro ao buscar as alunas");
    });
 });

  
 console.log("linha 21 server.js")
app.listen(8083,() =>{
    console.log("linha 23 server.js")
    console.log("Server start in port 8083")
})