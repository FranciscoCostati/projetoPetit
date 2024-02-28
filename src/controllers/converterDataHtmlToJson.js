
document.querySelectorAll('form').forEach(form => {
   
    form.addEventListener('submit', function(event) {
     
        event.preventDefault(); 
        console.log("linha 7 converterDataHtmlToJson.js")
        form.elements 
        var data = Array.from(this.elements).reduce((obj, input) => { 
            console.log("linha 10 converterDataHtmlToJson.js")
            if (input.name) {
                obj[input.name] = input.value;
            }
            console.log("linha 14 converterDataHtmlToJson.js")
            return obj;
        }, {});
        console.log("linha 17 converterDataHtmlToJson.js")
        fetch(this.action, { 
            
            method: this.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
           
        }).then(response => { 
            console.log("linha 27 converterDataHtmlToJson.js")
            if (response.status === 201) { 
                alert("Dados inseridos com sucesso"); 
            }
        })
      
    });
});

