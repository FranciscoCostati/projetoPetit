var tbody = document.querySelector("tbody");

function deletarAluna(id) {
  var confirmation = confirm("Tem certeza que quer deletar a Aluna");
  if(confirmation){
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://localhost:8083/deleteAluna/" + id);
  xhr.onload = function() {
    if (xhr.status == 204) {
      console.log("Aluna deletada com sucesso");
      // Chamar o método callAluna para carregar a página
      callAluna();
    } else {
      console.log("Erro ao deletar Aluna");
    }
  };
  xhr.send();
window.location.reload()
  }
}


function callAluna() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:8083/findAllAluna");

  xhr.onload = function() {

    if (xhr.status == 200) {
   
      var alunas = JSON.parse(xhr.responseText);
      console.log(alunas);

alunas.sort(function(a, b) {
  if (a.nomeAluna && b.nomeAluna) {
    return a.nomeAluna.localeCompare(b.nomeAluna);
  } else {
    return 0;
  }
});


      for (var i = 0; i < alunas.length; i++) {
        var tr = document.createElement("tr");

        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdCpfRgResponsavel = document.createElement("td");
        var tdCpfRgAluna = document.createElement("td");
        var tdNomeResponsavel = document.createElement("td");

        tdId.textContent = alunas[i].idAluna;
        tdNome.textContent = alunas[i].nomeAluna;
        tdCpfRgResponsavel.textContent = alunas[i].cpfRgResponsavel;
        tdCpfRgAluna.textContent = alunas[i].cpfRgAluna;
        tdNomeResponsavel.textContent = alunas[i].nomeResponsavel;

        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdCpfRgResponsavel);
        tr.appendChild(tdCpfRgAluna);
        tr.appendChild(tdNomeResponsavel);


        tr.addEventListener('click', function() {
          var firstCell = this.cells[0];
          var firstCellValue = firstCell.textContent || firstCell.innerText;
          console.log("myVariable is "+firstCellValue); 
          // Chamar a função deletarTurma quando a linha é clicada
          deletarAluna(firstCellValue);
        });

        tbody.appendChild(tr);
      }
    }
  };

  xhr.send();
}

window.onload = callAluna;