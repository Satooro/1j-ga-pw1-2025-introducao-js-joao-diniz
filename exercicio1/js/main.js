let nome, idade, buttonCadastre, mensagem;
idade = 0;
buttonCadastre = document.getElementById('buttonCadastre');
mensagem = document.getElementById('msg')
buttonCadastre.addEventListener('click', () => {
    nome = document.getElementById('nome').value.trim();
    idade = document.getElementById('idade').value.trim();
    verif(idade);
});
let verif = (number) => {
    let texto;
    if(number >= 18) {
        texto = "maior de idade";
        mensagem.innerHTML = `Olá ${nome}, você é ${texto} e está apto ao alistamento!`;
    } else {
        texto = "menor de idade";
        msg.innerHTML = `Olá ${nome}, você é ${texto} e não está aptado ao alistamento ainda!`;
    }
}