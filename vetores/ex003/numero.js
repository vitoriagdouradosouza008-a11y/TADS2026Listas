function maiorMenor() {
    let vetor = [];

    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
        vetor.push(numero);
    }

    let maior = vetor[0];
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {

        if (vetor[i] > maior) {
            maior = vetor[i];
        }

        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    document.getElementById("resultado").innerHTML = "Números digitados: " + vetor.join(", ") + "<br><br>Maior número: " + maior + "<br>Menor número: " + menor;
}