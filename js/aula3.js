function estiloParagrafo() {
    const cores =[
        "lightBlue", // 0
        "purple", //1
        "gold",//2
        "OliveDrab",//
        "DeepPink",
        "orange"

    ];

    // Math.random(), Math.floor()
    let paragrafos = document.getElementsByTagName("p");
    
    for(let i = 0; i <= paragrafos.length; i++){
        let corAplicada = cores [(Math.floor(Math.random()* cores.length))];
        paragrafos[i].style.color = corAplicada;
    }
}

document.querySelector("button").addEventListener("click", estiloParagrafo);