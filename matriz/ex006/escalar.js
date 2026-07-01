function multiEscalar() {
    let multiplicador = parseInt(prompt("Digite um número inteiro:"));

    let matriz = [
        [2, 4],
        [6, 8]
    ];

    let novaMatriz = [];

    for (let i = 0; i < matriz.length; i++) {
        novaMatriz.push([]);

        for (let j = 0; j < matriz.length; j++) {
            novaMatriz[i][j] = matriz[i][j] * multiplicador;
        }
    }

    let resultado = "";

    resultado += "<h3>Matriz Original:</h3>"

    for (let i = 0; i < matriz.length; i++) {
        resultado += matriz[i].join(" ") + "<br>";
    }

    resultado += "<br><h3>Nova Matirz criada:</h3>"

    for (let i = 0; i < 2; i++) {
        resultado += novaMatriz[i].join(" ") + "<br>";  
    }
       
    document.getElementById("resultado").innerHTML = resultado;
}