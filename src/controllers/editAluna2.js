var myVariableStore = localStorage.getItem('myVariableStore');
console.log("myVariable is " + myVariableStore);

fetch('http://localhost:8083/findAllTurma')
.then(response => response.json())
.then(turmas => {
    const select = document.getElementById('Turma');
    turmas.forEach(turma => {
        const option = document.createElement('option');
        option.value = turma.idTurma;
        option.textContent = turma.descricao;
        select.appendChild(option);
    });
});

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
    let idTurma = document.getElementById('Turma').value;

    console.log(tdNome)
    console.log(tdCpfRgResponsavel)
    console.log(tdCpfRgAluna)
    console.log(tdNomeResponsavel)
    console.log(idTurma)

    fetch(`http://localhost:8083/editAluna/${myVariableStore}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ nomeAluna: tdNome, cpfRgResponsavel: tdCpfRgResponsavel, cpfRgAluna: tdCpfRgAluna, nomeResponsavel: tdNomeResponsavel},{ fk_idTurma: idTurma }]),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(window.location = 'listaDeAlunas.html')
        .catch((error) => {
            console.error('Error:', error);
        });
});

