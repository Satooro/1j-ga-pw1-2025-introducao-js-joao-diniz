document.addEventListener('DOMContentLoaded', () => {
    const buttonEnviar = document.getElementById('buttonEnviar');

    const randomGenerate = () => {
        return Math.floor(Math.random() * 50) + 1;
    }
    let randomNumber = randomGenerate();

    let msg = document.getElementById('msg');
    let tentativasMsg = document.getElementById('tentativas');
    let tentativas = 0;
    let numeros = [];
    let running = true;
    console.log(`Apenas para testes o número aleatório é: ${randomNumber}`);

    const menorOuMaior = (number, random) => {
        return random < number ? `O número aleatório é menor que ${number}` : `O número aleatório é maior que ${number}`;
    }

    const verificarNum = () => {
        if(running){

            entrada = parseInt(document.getElementById('inputNumero').value);
            console.log(`${entrada} - random: ${randomNumber}`);
            if (entrada == randomNumber) {
                msg.textContent = `Você acertou! O número era: ${randomNumber}`;
                tentativasMsg.textContent = `Suas tentativas foram: ${numeros}`;
                running = false
            } else {
                verificarTentativas(entrada);
            }
        } else {
            msg.textContent = `Você já acertou, o número era: ${randomNumber}`;
        }
    }

    const verificarTentativas = (entrada) => {
        if (entrada >= 1 && entrada <= 50) {
            if (tentativas <= 9) {
                numeros.push(` ${entrada}`);
                msg.textContent = menorOuMaior(entrada, randomNumber);
                tentativas++;
                tentativasMsg.textContent = `Total de tentativas: ${tentativas}\nTentativas restantes: ${10 - tentativas}`;
            } else {
                msg.textContent = `Você atingiu o máximo de tentativas, o número correto era: ${randomNumber}`;
                tentativasMsg.textContent = `Suas tentativas foram: ${numeros}`;
            }
        } else {
            tentativasMsg.textContent = `Tentativa não contabilizada!`;
            msg.textContent = `É necessário que o número seja de 0 à 50.`;
        }
    }

    buttonEnviar.addEventListener('click', () => {
        verificarNum();
    });
});