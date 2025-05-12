let aleatorio = ["ser bobo", "ser preguiçoso", "ser insensível", "reajir com 👍 em tudo"];

function gerarRandom() {
    let number = Math.floor(Math.random() * aleatorio.length + 1);
    return number;
}

const buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click', () => {
    let inputMotivo = document.getElementById('input-motivo').value;
    if(inputMotivo < 2){
        console.log(`É preciso no mínimo 3 letras para adicionar um motivo!`)
        return;
    } else {
        aleatorio.push(inputMotivo);
    }
})

const buttonNome = document.getElementById('buttonGerar');
buttonNome.addEventListener('click', () => {
    console.log(`${aleatorio[gerarRandom() - 1]}`)
})