// Selecionar o elemento tbody da tabela
var tbody = document.querySelector("tbody");

// Criar uma função para fazer a requisição HTTP
function listarTurmas() {
  // Criar um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Abrir uma conexão GET com a rota
  xhr.open("GET", "http://localhost:8083/findAllTurma");

  // Definir o que fazer quando a resposta chegar
  xhr.onload = function() {
    // Verificar se o status é 200 (OK)
    if (xhr.status == 200) {
      // Converter a resposta em um array de objetos JSON
      var Turmas = JSON.parse(xhr.responseText);

      // Ordenar o array de Turmas por nome
    // Ordenar o array de Turmas por nome
Turmas.sort(function(a, b) {
  if (a.nomeTurma && b.nomeTurma) {
    return a.nomeTurma.localeCompare(b.nomeTurma);
  } else {
    return 0;
  }
});


      // Percorrer o array de Turmas
      for (var i = 0; i < Turmas.length; i++) {
        // Criar um elemento tr
        var tr = document.createElement("tr");

        // Criar um elemento td para cada propriedade da Turma
        var tdId = document.createElement("td");
        var tddescricao = document.createElement("td");
   

        // Preencher os elementos td com os valores da Turma
        tdId.textContent = Turmas[i].idTurma;
        tddescricao.textContent = Turmas[i].descricao;
     

        // Adicionar os elementos td ao elemento tr
        tr.appendChild(tdId);
        tr.appendChild(tddescricao);
  

        // Adicionar o elemento tr ao elemento tbody
        tbody.appendChild(tr);
      }
    }
  };

  // Enviar a requisição
  xhr.send();
}

// Chamar a função ao carregar a página
window.onload = listarTurmas;
