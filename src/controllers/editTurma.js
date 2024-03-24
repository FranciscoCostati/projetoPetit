var tbody = document.querySelector("tbody");

function listarTurmas() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:8083/findAllTurma");

  xhr.onload = function () {
    if (xhr.status == 200) {
      var Turmas = JSON.parse(xhr.responseText);

      Turmas.sort(function (a, b) {
        if (a.nomeTurma && b.nomeTurma) {
          return a.nomeTurma.localeCompare(b.nomeTurma);
        } else {
          return 0;
        }
      }
      );

      for (var i = 0; i < Turmas.length; i++) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tddescricao = document.createElement("td");

        tdId.textContent = Turmas[i].idTurma;
        tddescricao.textContent = Turmas[i].descricao;

        tr.addEventListener('click', function () {
          var firstCell = this.cells[0];
          var firstCellValue = firstCell.textContent || firstCell.innerText;
          var myVariableStore = firstCellValue;
          console.log("myVariable is " + myVariableStore);
          localStorage.setItem('myVariableStore', myVariableStore);

          window.location = 'editarTurma2.html'
        });

        tr.appendChild(tdId);
        tr.appendChild(tddescricao);
        tbody.appendChild(tr);
      }

    }
  };

  xhr.send();
}

window.onload = listarTurmas;
