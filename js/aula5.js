window.addEventListener("load", () => {
    let destaques = document.getElementsByClassName("destaque");

    for(let i = 0; i <= destaques.length; i++) {
        destaques[i].style.backgroundColor = "DeepPink";
        destaques[i].style.border = "10px dotted";
        destaques[i].style.borderRadius = "5px";
    }
});