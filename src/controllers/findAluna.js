var tbody = document.querySelector("tbody");

function listarAlunas() {
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

        tbody.appendChild(tr);
      }
    }
  };

  xhr.send();
}
window.onload = listarAlunas;
