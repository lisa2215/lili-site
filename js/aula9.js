function enviarFormulario() {
    // primeira maneira (Não otimizada)
    let nome = document.querySelector("input").value;
    let email = document.querySelector(".email").value;
    let telefone = document.querySelector("#telefone").value;
    
    
    const pessoaDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "email": document.querySelectorAll("input")[1].value,
        "Telefone": document.querySelectorAll("input")[2].value

    }

    alert(nome, email, telefone);
    alert(pessoaDTO);
}


let telefone2 = document.querySelector(`[placeholder = "Insira seu telefone"]`).value;