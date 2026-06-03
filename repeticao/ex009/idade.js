function verificarIdades() {
    let maiorIdade = 0;
    let menorIdade = 999;

    for (let i = 1; i <= 5; i++) {
        let idade = Number(prompt(`Digite a idade da ${i}ª pessoa`));

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }

        if (idade < menorIdade) {
            menorIdade = idade
        }

        document.getElementById("resultado").innerHTML = `Maior idade: ${maiorIdade}<br>Menor idade: ${menorIdade}`;
    }
}