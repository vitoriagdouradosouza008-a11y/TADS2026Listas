function filtrarPares() {
    let vetor = [];
    let pares = [];

    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        vetor.push(numero);
    }

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares.push(vetor[i]);
        }
    }

    document.getElementById("resultado").innerHTML = "Números gerados: " + vetor.join(", ") + "<br><br>Numeros pares: " + pares.join(", ");
}