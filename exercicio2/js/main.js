document.addEventListener('DOMContentLoaded', () => {
    const buttonEnviar = document.getElementById('buttonEnviar');

    const randomGenerate = () => {
        return Math.floor(Math.random() * 50);
    }
    let randomNumber = randomGenerate();

    let msg = document.getElementById('msg');
    let tentativasMsg = document.getElementById('tentativas');
    let tentativas = 0;
    let numeros = [];
    console.log(`Apenas para testes o número aleatório é: ${randomNumber}`);

    const menorOuMaior = (number, random) => {
        return random < number ? `O número aleatório é menor que ${number}` : `O número aleatório é maior que ${number}`;
    }

    const verificarNum = () => {
        entrada = parseInt(document.getElementById('inputNumero').value);
        console.log(`${entrada} - random: ${randomNumber}`);
        if (entrada == randomNumber) {
            console.log("CERTO")
            msg.textContent = `Você acertou! O número era: ${randomNumber}`;
            tentativasMsg.textContent = `Suas tentativas foram: ${numeros}`;
        } else {
            verificarTentativas(entrada);
        }
    }

    const verificarTentativas = (entrada) => {
        if (entrada >= 0 && entrada <= 50) {
            if (tentativas <= 9) {
                numeros.push(` ${entrada}`);
                msg.textContent = menorOuMaior(entrada, randomNumber);
                tentativas++;
                tentativasMsg.textContent = `Total de tentativas: ${tentativas}`;
            } else {
                msg.textContent = `Você atingiu o máximo de tentativas, o número correto era: ${randomNumber}`;
                tentativasMsg.textContent = `Suas tentativas foram: ${numeros}`;
            }
        } else {
            tentativasMsg.textContent = `É necessário que o número seja de 0 à 50.`;
            msg.textContent = `Tentativa não contabilizada!`;
        }
    }

    buttonEnviar.addEventListener('click', () => {
        verificarNum();
    });
});