// function editTurma(id) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://localhost:8083/findAllTurmaAluna");
  
//     xhr.onload = function() {
//       if (xhr.status == 200) {
//         var Turma = JSON.parse(xhr.responseText);
  
//         // Assume you have form fields with ids 'idTurma' and 'descricao'
//         document.getElementById('idTurma').value = Turma.idTurma;
//         document.getElementById('descricao').value = Turma.descricao;
  
//         // Show the form
//         document.getElementById('editForm').style.display = 'block';
//       }
//     };
  
//     xhr.send();
//   }
  
//   // Call this function when the save button on the form is clicked
// //   function saveChanges() {
// //     var id = document.getElementById('idTurma').value;
// //     var descricao = document.getElementById('descricao').value;
  
// //     var xhr = new XMLHttpRequest();
// //     xhr.open("POST", "http://localhost:8083/updateTurma");
  
// //     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
// //     xhr.onload = function() {
// //       if (xhr.status == 200) {
// //         // If the update was successful, hide the form and refresh the table
// //         document.getElementById('editForm').style.display = 'none';
// //         listarTurmas();
// //       }
// //     };
  
// //     xhr.send(JSON.stringify({idTurma: id, descricao: descricao}));
// //   }
  