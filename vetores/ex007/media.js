function mediaTurma() {
    let notas = []
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        notas[i] = Number(prompt("Informe a nota do " + (i + 1) + "º aluno:"));
        soma += notas[i];
    }

    let media = soma / notas.length;

    let acimaMedia = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            acimaMedia++;
        }

        document.getElementById("resultado").innerHTML = "Média da turma: " + media.toFixed(2) + "<br><br>" + "Alunos acima da média: " + acimaMedia;
    }
}