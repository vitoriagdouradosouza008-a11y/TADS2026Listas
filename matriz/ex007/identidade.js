function matrizIdentidade() {
    let n = parseInt(prompt("Digite o tamanho da matriz (um número inteiro):"));

    let texto = "<h3>Matriz Identidade " + n + "x" + n + "</h3>";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            if (i === j) {
               texto += "1 ";
            } else {
                texto += "0 ";
            }
        }

        texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}