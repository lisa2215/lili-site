function somar(){
    let primeiroNumero = parseInt(document.getElementsByName("numero")[0].value);
    let segundoNumero = parseInt(document.getElementsByName("numero")[1].value);

    let resultado = primeiroNumero + segundoNumero;

    document.getElementsByName("resultado")[0].innerText = resultado;
}

document.querySelector("button").addEventListener("click", somar);