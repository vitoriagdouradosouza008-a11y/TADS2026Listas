function iniciarContagem() {
    const contador = document.getElementById("contador");
    const botao = document.getElementById("iniciarContagem");

    botao.disabled = true;
     
    for (let i = 10; i >= 0; i--) {
        setTimeout(() => {
            contador.textContent = i > 0 ? i : "DECOLAGEM!🚀";

            if (i === 0) {
                botao.disabled = false;
            }
        }, (10 - i) * 1000);
    }   
}