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
    if(number) {
        mensagem.textContent() = `Olá ${nome}, você`;
    }
}