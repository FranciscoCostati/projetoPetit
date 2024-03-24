var tbody = document.querySelector("tbody");

function deletarTurma(id) {
  var confirmation = confirm("Tem certeza que quer deletar a turma");
  if(confirmation){
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://localhost:8083/deleteTurma/" + id);
  xhr.onload = function() {
    if (xhr.status == 204) {
      console.log("Turma deletada com sucesso");
      // Chamar o método callTurma para carregar a página
      callTurma();
    } else {
      console.log("Erro ao deletar turma");
    }
  };
  xhr.send();
window.location.reload()
  }
}

function callTurma() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8083/findAllTurma");
  xhr.onload = function() {
    if (xhr.status == 200) {
      var Turmas = JSON.parse(xhr.responseText);
      // Limpar o tbody antes de adicionar novas linhas
     tbody.innerHTML = '';
      for (var i = 0; i < Turmas.length; i++) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tddescricao = document.createElement("td");

        tdId.textContent = Turmas[i].idTurma;
        tddescricao.textContent = Turmas[i].descricao;

        tr.appendChild(tdId);
        tr.appendChild(tddescricao);

        tr.addEventListener('click', function() {
          var firstCell = this.cells[0];
          var firstCellValue = firstCell.textContent || firstCell.innerText;
          console.log("myVariable is "+firstCellValue); 
          // Chamar a função deletarTurma quando a linha é clicada
          deletarTurma(firstCellValue);
        });

        tbody.appendChild(tr);
      }
    }
  };
  xhr.send();
}

window.onload = callTurma;
