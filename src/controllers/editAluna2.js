var myVariableStore = localStorage.getItem('myVariableStore');
console.log("myVariable is " + myVariableStore);

document.getElementById('editAlunaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var confirmation = confirm("Tem certeza que deseja editar a Aluna");
    if (!confirmation) {
        return;
    }

    let tdNome = document.getElementById('nomeAluna').value;
    let tdCpfRgResponsavel = document.getElementById('cpfRgResponsavel').value;
    let tdCpfRgAluna = document.getElementById('cpfRgAluna').value;
    let tdNomeResponsavel = document.getElementById('nomeResponsavel').value;
    console.log(tdNome)
    console.log(tdCpfRgResponsavel)
    console.log(tdCpfRgAluna)
    console.log(tdNomeResponsavel)

    fetch(`http://localhost:8083/editAluna/${myVariableStore}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeAluna: tdNome, cpfRgResponsavel: tdCpfRgResponsavel, cpfRgAluna: tdCpfRgAluna, nomeResponsavel: tdNomeResponsavel }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(window.location = 'listaDeAlunas.html')
        .catch((error) => {
            console.error('Error:', error);
        });
});
