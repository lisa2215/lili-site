    let paragrafo = document.querySelector("p");
    
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = paragrafo.innerText;
    novoParagrafo.style.color ="DeepPink";

    document.querySelector("main").appendChild(novoParagrafo);

