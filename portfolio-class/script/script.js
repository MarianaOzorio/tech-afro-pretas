let btnEnviar = document.getElementById("button");
btnEnviar.addEventListener("click", enviarMensagem);

function enviarMensagem() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;  

    if(nome.length == 0 || email.length == 0 || mensagem.length == 0) {
        window.alert('Ops! Parace que você esqueceu de preencher algum campo.')
    } else {
        window.alert('Mensagem enviada com sucesso! Te respondo em breve.')
    }
};