const express = require("express");
const app = express();
console.log("linha 3 converterDataHtmlToJson.js")
const { Aluna, Contato, Despesa, Endereco, Turma, AlunaTurma, Email } = require('./src/controllers/registerData.js');
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
    const newAluna =  await data.Aluna.create(req.body);
   await data.AlunaTurma.create({
    fk_idTurma: req.body.Turma,
    fk_idAluna: newAluna.idAluna
   });
   res.sendStatus(201);   
 });


 app.post("/createTurma", async(req, res) => {
    console.log(req.body)
    console.log("linha 15 server.js")
   await data.Turma.create(req.body);
   res.sendStatus(201);   
 });

 app.delete("/deleteTurma/:id", async(req, res) => {
  const id = req.params.id;
  await data.AlunaTurma.destroy({
    where:{
      fk_idTurma: id
    }
  })
  await data.Turma.destroy({
      where: {
          idTurma: id
      }
  });
  res.sendStatus(200);
});

 
 app.get("/findAllTurma", async(req, res) => {
  data.Turma.findAll()
  .then(turmas => {
    res.json(turmas);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao buscar as Turmas");
  });
});

 app.get("/findAllAluna", async(req, res) => {
    data.Aluna.findAll()
    .then(alunas => {
      res.json(alunas);    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Ocorreu um erro ao buscar as alunas");
    });
 });

 app.get("/findAllTurmaAluna/:idTurma", async(req, res) => {
  const idTurma = req.params.idTurma;
  AlunaTurma.findAll({
    where: {
        fk_idTurma: idTurma
    },
    include: [{
        model: data.Aluna,
        required: true
    }]
  })
  .then(turmaAluna => {
    res.json(turmaAluna);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao buscar as alunas");
  });
});

 console.log("linha 21 server.js")
app.listen(8083,() =>{
    console.log("linha 23 server.js")
    console.log("Server start in port 8083")
})
