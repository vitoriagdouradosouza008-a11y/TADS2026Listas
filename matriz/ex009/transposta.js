function matrizTransposta() {
    let matrizOriginal = [];

    for (let i = 0; i < 2; i++) {
        matrizOriginal[i] = [];

        for (let j = 0; j < 3; j++) {
            matrizOriginal[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    let matrizTransposta = [];

    for (let j = 0; j < 3; j++) {
        matrizTransposta[j] = [];

        for (let i = 0; i < 2; i++) {
            matrizTransposta[j][i] = matrizOriginal[i][j];
        }
    }

    let textoOriginal = "";

    for (let i = 0; i < matrizOriginal.length; i++) {
        textoOriginal += matrizOriginal[i].join(" ") + "<br>";
    }

     document.getElementById("original").innerHTML = textoOriginal;

        let textoTransposta = "";

        for (let i = 0; i < matrizTransposta.length; i++) {
            textoTransposta += matrizTransposta[i].join(" ") + "<br>";
        }

        document.getElementById("transposta").innerHTML = textoTransposta;
}