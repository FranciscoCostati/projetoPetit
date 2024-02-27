// Selecionar o elemento tbody da tabela
var tbody = document.querySelector("tbody");

// Criar uma função para fazer a requisição HTTP
function listarTurmaAluna() {
  // Recuperar o valor do localStorage
  var idTurma = localStorage.getItem('valorTd');

  // Criar um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Abrir uma conexão GET com a rota
  xhr.open("GET", "http://localhost:8083/findAllTurmaAluna/" + idTurma);

  // Definir o que fazer quando a resposta chegar
  xhr.onload = function() {
    // Verificar se o status é 200 (OK)
    if (xhr.status == 200) {
      // Converter a resposta em um array de objetos JSON
      var TurmaAluna = JSON.parse(xhr.responseText);
console.log(TurmaAluna);
      // Ordenar o array de alunas por nome
    // Ordenar o array de alunas por nome
// TurmaAluna.sort(function(a, b) {
//   if (a.nomeTurmaAluna && b.nomeTurmaAluna) {
//     return a.nomeTurmaAluna.localeCompare(b.nomeTurmaAluna);
//   } else {
//     return 0;
//   }
// });


      // Percorrer o array de alunas
      for (var i = 0; i < TurmaAluna.length; i++) {
        // Criar um elemento tr
        var tr = document.createElement("tr");

        // Criar um elemento td para cada propriedade da aluna
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdCpfRgResponsavel = document.createElement("td");
        var tdCpfRgAluna = document.createElement("td");
        var tdNomeResponsavel = document.createElement("td");

        // Preencher os elementos td com os valores da aluna
        tdId.textContent = TurmaAluna[i].aluna.idAluna;
        tdNome.textContent = TurmaAluna[i].aluna.nomeAluna;
        tdCpfRgResponsavel.textContent = TurmaAluna[i].aluna.cpfRgResponsavel;
        tdCpfRgAluna.textContent = TurmaAluna[i].aluna.cpfRgAluna;
        tdNomeResponsavel.textContent = TurmaAluna[i].aluna.nomeResponsavel;

        // Adicionar os elementos td ao elemento tr
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdCpfRgResponsavel);
        tr.appendChild(tdCpfRgAluna);
        tr.appendChild(tdNomeResponsavel);

        // Adicionar o elemento tr ao elemento tbody
        tbody.appendChild(tr);
      }
    }
  };

  // Enviar a requisição
  xhr.send();
}

// Chamar a função ao carregar a página
window.onload = listarTurmaAluna;
