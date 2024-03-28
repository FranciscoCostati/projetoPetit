const express = require("express");
const app = express();
console.log("linha 3 converterDataHtmlToJson.js")
const { Aluna, Contato, Despesa, Endereco, Turma, AlunaTurma, Email } = require('./src/controllers/registerData.js');
console.log(Aluna)
console.log(Turma)
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Init Page")
})
console.log("linha 12 server.js")

app.post("/createAluna", async (req, res) => {
  console.log(req.body)
  console.log("linha 15 server.js")
  const newAluna = await data.Aluna.create(req.body);
  await data.AlunaTurma.create({
    fk_idTurma: req.body.Turma,
    fk_idAluna: newAluna.idAluna
  });
  res.sendStatus(201);
});


app.post("/createTurma", async (req, res) => {
  console.log(req.body)
  console.log("linha 15 server.js")
  await data.Turma.create(req.body);
  res.sendStatus(201);
});

app.delete("/deleteTurma/:id", async (req, res) => {
  const id = req.params.id;
  await data.AlunaTurma.destroy({
    where: {
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

app.delete("/deleteAluna/:id", async (req, res) => {
  const id = req.params.id;
  await data.AlunaTurma.destroy({
    where: {
      fk_idAluna: id
    }
  })
  await data.Aluna.destroy({
    where: {
      idAluna: id
    }
  });
  res.sendStatus(200);
});

app.put("/editTurma/:id", async (req, res) => {
  const id = req.params.id;
  const descricao = req.body; // assuming newValues is an object with the new values for the Turma

  await data.Turma.update(descricao, {
    where: {
      idTurma: id
    }
  });

  res.status(200).send("Turma atualizada para: " + descricao.descricao);
});


app.put("/editAluna/:id", async (req, res) => {
  const idAluna = req.params.id;
  const dataAluna = req.body[0];
  const datafk_idTurma = req.body[1].fk_idTurma;
  let checkDatafk_idTurma = true;

  await data.AlunaTurma.findAll()
    .then(aluna_turma => {
      // Check if 'fk_idAluna = 1' exists in 'turmas'
      const exists = aluna_turma.some(aluna_turma => aluna_turma.fk_idAluna === Number(idAluna));
      console.log(aluna_turma)
      console.log(idAluna)
      console.log(checkDatafk_idTurma)
      console.log(exists)

      if (!exists) {
        checkDatafk_idTurma = false;
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Ocorreu um erro ao buscar as Turmas");
    });
  console.log(checkDatafk_idTurma)
  await data.Aluna.update(dataAluna, {
    where: {
      idAluna: idAluna
    }
  })

  if (checkDatafk_idTurma === false) {
    await data.AlunaTurma.create({
      fk_idTurma: datafk_idTurma,
      fk_idAluna: idAluna
    });
  } else {

    await data.AlunaTurma.update({ fk_idTurma: datafk_idTurma }, {
      where: {
        fk_idAluna: idAluna
      }
    });
  }
  console.log(idAluna)
  console.log(datafk_idTurma)

  res.status(200).send("Aluna atualizada para: ");
});

// ADICIONAR SEGUNDA TURMA
// app.put("/editAluna/:id", async(req, res) => {
//   const id = req.params.id;
//   const dataAluna = req.body[0];
//   const dataAlunaTurma = req.body[1];
//   const validation = dataAlunaTurma.fk_idTurma
// console.log(validation)
//   await data.Aluna.update(dataAluna, {
//     where: {
//       idAluna: id
//     }
//   })
//       await data.AlunaTurma.create({
//       fk_idTurma: validation,
//       fk_idAluna: id
//      });

// await data.AlunaTurma.update(dataAlunaTurma,{
//   where: {
//     fk_idAluna: id
//       }
//  });

//   res.status(200).send("Aluna atualizada para: ");
// });

app.get("/findAllTurma", async (req, res) => {
  data.Turma.findAll()
    .then(turmas => {
      res.json(turmas);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Ocorreu um erro ao buscar as Turmas");
    });
});

app.get("/findAllAluna", async (req, res) => {
  data.Aluna.findAll()
    .then(alunas => {
      res.json(alunas);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Ocorreu um erro ao buscar as alunas");
    });
});

app.get("/findAllTurmaAluna/:idTurma", async (req, res) => {
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
app.listen(8083, () => {
  console.log("linha 23 server.js")
  console.log("Server start in port 8083")
})
