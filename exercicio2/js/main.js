document.addEventListener('DOMContentLoaded', () => {
    const buttonEnviar = document.getElementById('buttonEnviar');

    const randomGenerate = () => {
        let random = Math.floor(Math.random() * 50);
        return random;
    }
    console.log(randomGenerate());

    let msg = document.getElementById('msg');
    
    const verificarNum = () => {
        entrada = document.getElementById('inputNumero').value.trim();
        msg.textContent = `${entrada}`;
    }
    buttonEnviar.addEventListener('click', () => {
        verificarNum();
    });
});