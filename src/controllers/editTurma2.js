var myVariableStore = localStorage.getItem('myVariableStore');
console.log("myVariable is "+myVariableStore);

    document.getElementById('editTurmaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var confirmation = confirm("Tem certeza que deseja editar a Turma");
        if(!confirmation){
            return;
        }
        let descricao = document.getElementById('descricao').value;

        fetch(`http://localhost:8083/editTurma/${myVariableStore}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ descricao: descricao }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log(descricao)
        console.log(body)
    });
