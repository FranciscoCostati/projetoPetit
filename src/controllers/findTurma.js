var tbody = document.querySelector("tbody");


function listarTurmas() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:8083/findAllTurma");

  xhr.onload = function() {
    if (xhr.status == 200) {
      var Turmas = JSON.parse(xhr.responseText);

Turmas.sort(function(a, b) {
  if (a.nomeTurma && b.nomeTurma) {
    return a.nomeTurma.localeCompare(b.nomeTurma);
  } else {
    return 0;
  }
});


for (var i = 0; i < Turmas.length; i++) {
  var tr = document.createElement("tr");
  var tdId = document.createElement("td");
  var tddescricao = document.createElement("td");

  tdId.textContent = Turmas[i].idTurma;
  tddescricao.textContent = Turmas[i].descricao;

  tr.appendChild(tdId);
  tr.appendChild(tddescricao);

  // Adicionando evento de clique à linha
  tr.addEventListener('click', function() {
    // Capturando o valor da primeira célula
    var firstCell = this.cells[0];
    var firstCellValue = firstCell.textContent || firstCell.innerText;
    // Armazenando o valor em uma variável
    var myVariable = firstCellValue;
    console.log("myVariable is "+myVariable); // Você pode substituir isso pela ação que você quer realizar com a variável
    window.location='turma.html?turmaId=' + myVariable; 
  });

  tbody.appendChild(tr);
}

    }
  };

  xhr.send();
}

window.onload = listarTurmas;
