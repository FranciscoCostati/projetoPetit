
Um form no HTML é um elemento que permite ao usuário enviar dados para um site ou aplicação. Um form é composto por um ou mais widgets, como campos de texto, botões, caixas de seleção, etc. Um form geralmente tem um atributo action que define a URL para onde os dados serão enviados, e um atributo method que define o tipo de requisição HTTP a ser feita (GET ou POST). Um exemplo de form é:
HTML

<form action="/cadastro" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Enviar</button>
</form>
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
O fetch no JavaScript é uma função que permite fazer requisições HTTP de forma assíncrona, usando promessas e a API Fetch. O fetch recebe um ou dois argumentos: o primeiro é a URL da requisição, e o segundo é um objeto opcional com opções de configuração, como cabeçalhos, método, corpo, etc. O fetch retorna uma promessa que resolve em um objeto Response, que contém informações sobre a resposta do servidor, como status, cabeçalhos, corpo, etc. Um exemplo de fetch é:
fetch("https://api.exemplo.com/produtos")
  .then(response => response.json()) // converte a resposta em JSON
  .then(data => console.log(data)) // exibe os dados no console
  .catch(error => console.error(error)); // trata os erros

O addEventListener é um método que permite registrar uma função que será chamada quando um determinado evento ocorrer em um elemento. O addEventListener recebe três argumentos: o primeiro é o tipo de evento, como “click”, “change”, “load”, etc. O segundo é a função que será executada quando o evento acontecer, chamada de listener ou handler. O terceiro é um valor booleano opcional que indica se o evento deve ser capturado ou borbulhado na hierarquia do DOM. Um exemplo de addEventListener é:
let botao = document.getElementById("botao"); // seleciona um elemento pelo id
botao.addEventListener("click", function() { // adiciona um listener para o evento click
  alert("Você clicou no botão!"); // exibe um alerta na tela
}, false); // indica que o evento deve borbulhar

O querySelectorAll é um método que permite selecionar todos os elementos que correspondem a um ou mais seletores CSS. O querySelectorAll recebe um argumento que é uma string com os seletores CSS, separados por vírgulas. O querySelectorAll retorna uma NodeList estática, que é uma coleção de nós que pode ser percorrida com um laço ou acessada por índice. Um exemplo de querySelectorAll é:
let paragrafos = document.querySelectorAll("p, .paragrafo"); // seleciona todos os elementos <p> e os elementos com a classe "paragrafo"
paragrafos.forEach(p => { // percorre a NodeList com um forEach
  p.style.color = "red"; // muda a cor do texto para vermelho
});

