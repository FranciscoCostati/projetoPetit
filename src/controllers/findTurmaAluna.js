var tbody = document.querySelector("tbody");

function listarTurmaAluna() {
  var urlParams = new URLSearchParams(window.location.search);
  var myVariable = urlParams.get('turmaId');
  console.log("myvariable is "+ myVariable);

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:8083/findAllTurmaAluna/"+ myVariable);

  xhr.onload = function() {
    if (xhr.status == 200) {
      var TurmaAluna = JSON.parse(xhr.responseText);
      console.log(TurmaAluna);

      for (var i = 0; i < TurmaAluna.length; i++) {
        var tr = document.createElement("tr");

        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdCpfRgResponsavel = document.createElement("td");
        var tdCpfRgAluna = document.createElement("td");
        var tdNomeResponsavel = document.createElement("td");

        tdId.textContent = TurmaAluna[i].aluna.idAluna;
        tdNome.textContent = TurmaAluna[i].aluna.nomeAluna;
        tdCpfRgResponsavel.textContent = TurmaAluna[i].aluna.cpfRgResponsavel;
        tdCpfRgAluna.textContent = TurmaAluna[i].aluna.cpfRgAluna;
        tdNomeResponsavel.textContent = TurmaAluna[i].aluna.nomeResponsavel;

        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdCpfRgResponsavel);
        tr.appendChild(tdCpfRgAluna);
        tr.appendChild(tdNomeResponsavel);

        tbody.appendChild(tr);
      }
    }
  };

  xhr.send();
}

window.onload = listarTurmaAluna;
