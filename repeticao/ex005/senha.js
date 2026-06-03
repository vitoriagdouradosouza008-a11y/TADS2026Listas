function definirSenha() {

    let senhaDefinida = prompt("Defina sua senha:");

    let senhaDigitada = prompt("Digite sua senha para entrar:");

    while (senhaDigitada !== senhaDefinida) {
        alert("Senha incorreta, tente novamente!");
        senhaDefinida = prompt("Digite sua senha novamente:");
    }

    alert("Acesso concedido!");
        
}