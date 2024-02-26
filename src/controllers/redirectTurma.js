// Função para redirecionar para outra página
function redirectToPage() {
   // window.location = "../views/index.html"
    }
  
  // Adiciona o evento de clique a cada linha da tabela
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', redirectToPage);
  }
  