function enviarFormulario() {
    // primeira maneira (Não otimizada)
    let nome = document.querySelector("input").value;
    let email = document.querySelector(".email").value;
    let resposta = document.querySelector("#resposta").value;
    
    
    const pessoaDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "email": document.querySelectorAll("input")[1].value,
        "Resposta": document.querySelectorAll("input")[2].value

    }

    alert(nome, email, resposta);
    alert(pessoaDTO);
}


let Resposta2 = document.querySelector(`[placeholder = "Insira sua resposta"]`).value;