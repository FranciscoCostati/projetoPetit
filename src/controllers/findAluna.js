// Selecionar o elemento tbody da tabela
var tbody = document.querySelector("tbody");

// Criar uma função para fazer a requisição HTTP
function listarAlunas() {
  // Criar um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Abrir uma conexão GET com a rota
  xhr.open("GET", "http://localhost:8083/findAllAluna");

  // Definir o que fazer quando a resposta chegar
  xhr.onload = function() {
    // Verificar se o status é 200 (OK)
    if (xhr.status == 200) {
      // Converter a resposta em um array de objetos JSON
      var alunas = JSON.parse(xhr.responseText);
      console.log(alunas);
      // Ordenar o array de alunas por nome
    // Ordenar o array de alunas por nome
// alunas.sort(function(a, b) {
//   if (a.nomeAluna && b.nomeAluna) {
//     return a.nomeAluna.localeCompare(b.nomeAluna);
//   } else {
//     return 0;
//   }
// });


      // Percorrer o array de alunas
      for (var i = 0; i < alunas.length; i++) {
        // Criar um elemento tr
        var tr = document.createElement("tr");

        // Criar um elemento td para cada propriedade da aluna
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdCpfRgResponsavel = document.createElement("td");
        var tdCpfRgAluna = document.createElement("td");
        var tdNomeResponsavel = document.createElement("td");

        // Preencher os elementos td com os valores da aluna
        tdId.textContent = alunas[i].idAluna;
        tdNome.textContent = alunas[i].nomeAluna;
        tdCpfRgResponsavel.textContent = alunas[i].cpfRgResponsavel;
        tdCpfRgAluna.textContent = alunas[i].cpfRgAluna;
        tdNomeResponsavel.textContent = alunas[i].nomeResponsavel;

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
window.onload = listarAlunas;
