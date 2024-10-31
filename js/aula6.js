// //adiciono um atributo ao elemento
// document.getElementById("pr1").setAttribute("class", "pr-classe");

// getElementByClassName("pr-classe")[0].style.color = "orange"
// //removo um atributo do elemento
// document.getElementById('pr2').removeAttribute("name");

// document.getElementById("figurinha").style.fontSize = "70px";

// function cute() {
//     document.getElementById("figurinha").textContent = "🐋";
// }

// function achou() {
//     document.getElementById("figurinha").textContent ="🐳";
// }

// document.getElementById("figurinha").addEventListener("mouseout", cute);
// document.getElementById("figurinha").addEventListener("mouseover", achou);

const tagImagem = document.getElementById("imagem-amor");

function amor1() {
    tagImagem.src = "img/027.png";
}

function amor2() {
    tagImagem.src = "img/022.png";
}

tagImagem.addEventListener("mouseover", amor2);
tagImagem.addEventListener("mouseout", amor1);