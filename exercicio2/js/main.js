document.addEventListener('DOMContentLoaded', () => {
    const buttonEnviar = document.getElementById('buttonEnviar');
    const buttonNome = document.getElementById('buttonNome');
    const buttonAgain = document.getElementById('btnNovamente');
    const buttonTeste = document.getElementById('btnTeste');

    buttonTeste.style.display = 'none';

    const randomGenerate = () => {
        return Math.floor(Math.random() * 50) + 1;
    }

    buttonAgain.style.display = 'none';
    const sectionPrincipal = document.getElementById('section-principal');
    sectionPrincipal.style.display = 'none';

    let randomNumber = randomGenerate();

    let msg = document.getElementById('msg');
    let tentativasMsg = document.getElementById('tentativas');
    let tentativas = 0;
    let numeros = [];
    let playerName;
    let vitorias = 0;

    console.log(`Apenas para testes o número aleatório é: ${randomNumber}`);

    const menorOuMaior = (number, random) => {
        return random < number ? `O número aleatório é menor que ${number}` : `O número aleatório é maior que ${number}`;
    }

    const vitoriasFunction = (variavel) => {
        if(variavel){
            return vitorias++;
        } else {
            vitorias = 0;
        }
    }

    const salvarNome = () => {
        playerName = document.getElementById('inputNome').value;
        return console.log(`Nome do individuo: ${playerName}`)
    }
    const mostrarJogo = () => {
        let sectionNome = document.getElementById('section-jogador');
        let sectionJogo = document.getElementById('section-principal');
        sectionNome.style.display = "none";
        sectionJogo.style.display = "flex";
    }

    const showPlayAgain = () => {
        buttonEnviar.style.display = 'none';
        document.getElementById('inputNumero').style.display = "none";
        buttonAgain.style.display = 'flex';
        buttonTeste.style.display = 'flex';
    }

    const verificarNum = () => {

        entrada = parseInt(document.getElementById('inputNumero').value);
        console.log(`${entrada} - random: ${randomNumber}`);
        if (entrada == randomNumber) {
            vitoriasFunction(true);
            msg.textContent = `Você acertou ${playerName}! Parabéns o número era: ${randomNumber}\nVocê tem ${vitorias} vitórias`;
            tentativasMsg.textContent = `Suas tentativas foram: ${numeros}`;
            showPlayAgain();
        } else {
            verificarTentativas(entrada);
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
                msg.textContent = `${playerName} você atingiu o máximo de tentativas, o número correto era: ${randomNumber}`;
                vitoriasFunction(false);
                tentativasMsg.textContent = `Suas tentativas foram: ${numeros}\nA`;
            }
        } else {
            tentativasMsg.textContent = `Tentativa não contabilizada!`;
            msg.textContent = `É necessário que o número seja de 0 à 50.`;
        }
    }

    
    buttonEnviar.addEventListener('click', () => {
        verificarNum();
    });

    buttonNome.addEventListener('click', () => {
        salvarNome();
        mostrarJogo();
    })

    const resetarGame = () => {
        randomNumber = randomGenerate();
        console.log(randomNumber);
        buttonEnviar.style.display = 'flex';
        document.getElementById('inputNumero').style.display = 'flex';
        buttonTeste.style.display = 'none';
        buttonAgain.style.display = 'none';
        tentativas = 0;
        numeros = [];
        msg.textContent = ``;
        tentativasMsg.textContent = ``;
    }

    buttonTeste.addEventListener('click', () => {
        resetarGame();
    })
});