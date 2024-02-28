// Selecionar o elemento tbody da tabela
var tbody = document.querySelector("tbody");

// Criar uma função para fazer a requisição HTTP
function listarTurmaAluna() {
  // Recuperar o valor do localStorage
  var urlParams = new URLSearchParams(window.location.search);
  var myVariable = urlParams.get('turmaId');
  console.log("myvariable is "+ myVariable); // Agora você tem o valor da variável na página turma.html

  // Criar um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Abrir uma conexão GET com a rota, adicionando myVariable ao final da URL
  xhr.open("GET", "http://localhost:8083/findAllTurmaAluna/"+ myVariable);

  // Definir o que fazer quando a resposta chegar
  xhr.onload = function() {
    // Verificar se o status é 200 (OK)
    if (xhr.status == 200) {
      // Converter a resposta em um array de objetos JSON
      var TurmaAluna = JSON.parse(xhr.responseText);
      console.log(TurmaAluna);

      for (var i = 0; i < TurmaAluna.length; i++) {
        // Criar um elemento tr
        var tr = document.createElement("tr");

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
