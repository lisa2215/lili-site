function estiloParagrafo() {
    const cores =[
        "lightBlue", // 0
        "purple", //1
        "Gold",//2
        "yellow",//
        "DeepPink",
        "orange"

    ];

    // Math.random(), Math.floor()
    let paragrafos = document.getElementsByTagName("p");
    let corAplicada = cores [(Math.floor(Math.random()* cores.length))];

    for(let i = 0; i <= paragrafos.length; i++){
        paragrafos[i].style.color = corAplicada;
    }
}

document.querySelector("button").addEventListener("click", estiloParagrafo);