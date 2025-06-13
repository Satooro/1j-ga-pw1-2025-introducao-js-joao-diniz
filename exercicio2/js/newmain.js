document.addEventListener('DOMContentLoaded', () => {
    let divCorpo;
    localStorage.clear();
    localStorage.setItem('a', 'a');
    let random = 0;
    let vitorias = 0;
    const criarNumeroRandom = (min, max) => {
        random = Math.floor(Math.random() * (max - min));
    }
    let tentativas = 9;
    let min = 0, maximo = 50;


    const montarPagina = () => {
        divCorpo = document.getElementById('corpo');
        divCorpo.appendChild(criarRegOuLogin());
    }
    const criarSectionRegPlayer = () => {
        const sectionRegPlayer = document.createElement('section');
        sectionRegPlayer.id = 'section-player';
        divCorpo = document.getElementById('corpo');
        divCorpo.appendChild(sectionRegPlayer);
    }

    const registroOuLogin = () => {
        const divBotoes = document.getElementById('div-botoes');
        const divRegister = document.getElementById('div-register');
        if (divRegister != null) {
            divRegister.remove();
        }
        if (divBotoes != null) {
            divBotoes.remove();
        }
        criarLoginPlayer();
    }

    const criarRegOuLogin = () => {
        const sectionRegPlayer = document.getElementById('section-player');

        const divBotoes = document.createElement('div');
        const buttonRegister = document.createElement('button');
        const buttonLogin = document.createElement('button');
        divBotoes.id = 'div-botoes';

        buttonRegister.textContent = `Registrar`;
        buttonRegister.type = `button`;
        buttonRegister.id = `buttonRegister`;
        buttonRegister.class = `botoesAzul`;
        buttonRegister.addEventListener('click', () => criarRegPlayer());

        buttonLogin.textContent = `Logar`;
        buttonLogin.type = `button`;
        buttonLogin.id = `buttonLogin`;
        buttonLogin.class = `botoesAzul`;
        buttonLogin.addEventListener('click', () => { registroOuLogin() });

        divBotoes.appendChild(buttonRegister);
        divBotoes.appendChild(buttonLogin);

        sectionRegPlayer.appendChild(divBotoes);
        return sectionRegPlayer;

    }

    const remover = (name) => {
        document.getElementById(name).remove();
    }

    const criarLoginPlayer = () => {
        console.log('criarloginplayer');
        const sectionPlayer = document.getElementById('section-player');
        const formLoginPlayer = document.createElement('form');
        formLoginPlayer.id = 'form-login';

        const divLogin = document.createElement('div');
        const textLogin = document.createElement('p');
        const textErro = document.createElement('p');
        const inputNome = document.createElement('input');
        const inputPassword = document.createElement('input');
        const divLoginBotoes = document.createElement('div');
        const buttonLogin = document.createElement('input');
        const buttonVoltar = document.createElement('input');
        divLogin.id = 'div-login';
        divLogin.className = 'divMeio';
        textLogin.id = 'p-login';
        textLogin.textContent = 'Logar';
        textErro.id = 'p-login-erro';

        inputNome.id = 'input-nome-login';
        inputNome.type = `text`;
        inputNome.placeholder = `Nome de usuário`;
        inputNome.required = true;

        inputPassword.id = `input-passw-login`;
        inputPassword.type = `password`;
        inputPassword.placeholder = `Insira sua senha`;
        inputPassword.required = true;

        divLoginBotoes.id = 'div-login-botoes';

        buttonLogin.id = `button-login`;
        buttonLogin.type = `submit`;
        buttonLogin.value = 'Logar';
        buttonLogin.className = 'botoes';

        buttonVoltar.id = `button-login-voltar`;
        buttonVoltar.type = `button`;
        buttonVoltar.value = `Voltar`;
        buttonVoltar.className = 'botoes';
        buttonVoltar.addEventListener('click', () => {
            formLoginPlayer.remove();
            montarPagina();
        })

        divLogin.appendChild(textLogin);
        divLogin.appendChild(textErro);
        divLogin.appendChild(inputNome);
        divLogin.appendChild(inputPassword);
        divLoginBotoes.appendChild(buttonVoltar);
        divLoginBotoes.appendChild(buttonLogin);
        divLogin.appendChild(divLoginBotoes);
        formLoginPlayer.addEventListener("submit", (e) => {
            e.preventDefault();

            let usuario = document.getElementById('input-nome-login').value;
            let senha = document.getElementById('input-passw-login').value;
            if (verificarLogin(usuario, senha)) {
                sectionPlayer.remove();
                criarSectionJogo();
                criarJogo();
            } else {
                console.log('passou não tio');
            }

        })

        formLoginPlayer.appendChild(divLogin);
        sectionPlayer.appendChild(formLoginPlayer);
    }

    const verificarLogin = (key, senha) => {
        let verificacao = false;
        let passw = localStorage.getItem(key);
        if (senha == passw) { verificacao = true; }
        return verificacao;
    }

    const criarSectionJogo = () => {
        const sectionGame = document.createElement('section');
        sectionGame.id = 'section-jogo';
        divCorpo = document.getElementById('corpo');
        divCorpo.appendChild(sectionGame);
    }

    const criarJogo = () => {
        const sectionJogo = document.getElementById('section-jogo');
        const divJogo = document.createElement('div');
        criarNumeroRandom(0, 50);
        let numeroRandom = random;
        console.log(`O Número aleatório gerado foi: ${numeroRandom}`);
        divJogo.id = 'div-jogo';
        divJogo.className = 'divMeio'
        criarNumerosMinMax(0, 50, divJogo);

        tentativas = 9;

        const pEscolha = document.createElement('p');
        pEscolha.id = 'p-jogo-escolha';
        pEscolha.textContent = `??`;

        const pTentativas = document.createElement('p');
        const pStreak = document.createElement('p');
        const p = document.createElement('p');
        pTentativas.id = 'p-jogo-tentativas';
        pStreak.id = 'p-jogo-streak';

        divJogo.appendChild(pEscolha);

        criarNumerosClicaveis(divJogo);
        criarBotoesJogo(divJogo);
        divJogo.appendChild(pTentativas);
        divJogo.appendChild(pStreak);
        sectionJogo.appendChild(divJogo);
    }

    const removerBotoesJogo = (id) => {
        const botoes = document.querySelectorAll(`#${id} button`);
        botoes.forEach(botao => botao.remove());
    }

    const criarJogarNovamente = () => {
        const botaoJogarNov = document.createElement('button');
        const botaoSair = document.createElement('button');

        botaoJogarNov.id = 'button-jogar-novamente';
        botaoJogarNov.type = 'button';
        botaoJogarNov.textContent = 'Jogar Novamente';
        botaoJogarNov.className = 'botoes-jogo';
        botaoJogarNov.addEventListener('click', () => {
            const divJogo = document.getElementById('div-jogo');
            divJogo.remove();
            criarJogo();
        })

        botaoSair.id = 'button-jogo-sair';
        botaoSair.type = 'button';
        botaoSair.textContent = 'Sair';
        botaoSair.className = 'botoes-jogo';
        botaoSair.addEventListener('click', () => {
            const sectionJogo = document.getElementById('section-jogo');
            sectionJogo.remove();
            criarSectionRegPlayer();
            montarPagina();
        });
        const divButtonsJogo = document.getElementById('botoes-jogo');
        divButtonsJogo.appendChild(botaoJogarNov);
        divButtonsJogo.appendChild(botaoSair);

    }

    const botoesJogo = (botaoLimpar, botaoChutar, botaoSair) => {

        botaoLimpar.id = 'button-jogo-limpar';
        botaoLimpar.type = 'button';
        botaoLimpar.textContent = 'Limpar';
        botaoLimpar.className = 'botoes-jogo';
        botaoLimpar.addEventListener('click', () => limparNumeros());

        botaoChutar.id = 'button-jogo-chutar';
        botaoChutar.type = 'button';
        botaoChutar.textContent = 'Chutar';
        botaoChutar.className = 'botoes-jogo';
        botaoChutar.addEventListener('click', () => {
            const pNumero = document.getElementById('p-jogo-escolha');
            numeroRandom = random;
            let numeroEscolhido = pNumero.textContent;
            const pTentativas = document.getElementById('p-jogo-tentativas')
            if (numeroEscolhido >= 0 && numeroEscolhido <= 50) {
                pTentativas.textContent = `Você tem ${tentativas} tentativas restantes`
                if (tentativas > 0) {
                    tentativas--;
                    if (numeroEscolhido > random && numeroEscolhido < maximo) {
                        maximo = numeroEscolhido;
                    } else if (numeroEscolhido < random && numeroEscolhido > min) {
                        min = numeroEscolhido;
                    }

                    pNumero.textContent = "??";
                    const pAmostra = document.getElementById('p-min-max');
                    pAmostra.textContent = `${min} > ? < ${maximo}`;

                    if (numeroEscolhido == numeroRandom) {
                        pAmostra.textContent = `${min} > ${numeroEscolhido} < ${maximo}`;
                        pNumero.textContent = `Você acertou o número. :)`;
                        removerBotoesJogo('botoes-jogo');
                        criarJogarNovamente();
                        vitorias++;
                        pTentativas.textContent = `Você está em uma sequência de ${vitorias} vitórias!`
                    };
                } else {
                    let vitoriasStreak = (vitorias > 0) ? `Suas tentativas acabaram e sua sequência de ${vitorias} vitórias chegou ao fim :(` : `Suas tentativas acabaram :(`;
                    pTentativas.textContent = vitoriasStreak;
                    vitorias = 0;
                    removerBotoesJogo('botoes-jogo');
                    criarJogarNovamente();
                }
            } else {
                pTentativas.textContent = `Os números devem estar entre 0 à 50.`;
                pNumero.textContent = `??`;
            }

        });

        botaoSair.id = 'button-jogo-sair';
        botaoSair.type = 'button';
        botaoSair.textContent = 'Sair';
        botaoSair.className = 'botoes-jogo';
        botaoSair.addEventListener('click', () => {
            const sectionJogo = document.getElementById('section-jogo');
            sectionJogo.remove();
            criarSectionRegPlayer();
            montarPagina();
        });
    }

    const criarBotoesJogo = (divJogo) => {
        const divButtonsJogo = document.createElement('div');
        divButtonsJogo.id = 'botoes-jogo';

        const botaoLimpar = document.createElement('button');
        const botaoChutar = document.createElement('button');
        const botaoSair = document.createElement('button');

        botoesJogo(botaoLimpar, botaoChutar, botaoSair);

        divButtonsJogo.appendChild(botaoLimpar);
        divButtonsJogo.appendChild(botaoChutar);
        divButtonsJogo.appendChild(botaoSair);
        divJogo.appendChild(divButtonsJogo);
    }

    const criarNumerosMinMax = (min, max, divCriar) => {
        const p = document.createElement('p');
        p.id = 'p-min-max';
        p.textContent = `${min} > ? < ${max}`;
        divCriar.appendChild(p);
    }

    const limparNumeros = () => {
        const pNumero = document.getElementById('p-jogo-escolha');
        if (!pNumero.textContent.endsWith(')')) {
            pNumero.textContent = "??";
        }
    }

    const criarNumerosClicaveis = (divPraCriar) => {
        let divNumeros = document.createElement('div');
        divNumeros.id = 'div-numeros';
        for (let count = 0; count < 10; count++) {
            let divNumero = document.createElement('div');
            divNumero.id = `div-numero-${count}`;
            divNumero.className = 'div-numero';
            divNumero.textContent = count;
            divNumero.addEventListener('click', () => {
                const pNumero = document.getElementById('p-jogo-escolha');
                let numeroAtual = pNumero.textContent;
                if (pNumero.textContent == "??") {
                    pNumero == "";
                    pNumero.textContent = count;
                } else if (!pNumero.textContent.endsWith(")")) {
                    pNumero.textContent = numeroAtual + count;
                }
            });
            divNumeros.appendChild(divNumero);
        }
        divPraCriar.appendChild(divNumeros);
    }

    const criarRegPlayer = () => {
        remover('div-botoes');

        const sectionRegPlayer = document.getElementById('section-player');

        const formRegPlayer = document.createElement('form');
        formRegPlayer.id = 'form-player';

        const divRegister = document.createElement('div');
        const textoReg = document.createElement('p');
        const textoErro = document.createElement('p');
        const inputNome = document.createElement('input');
        const inputPassword = document.createElement('input');
        const divRegisterBotoes = document.createElement('div');
        const buttonRegister = document.createElement('input');
        const buttonVoltar = document.createElement('input');
        divRegister.id = 'div-register';
        divRegister.className = 'divMeio';
        textoReg.id = `p-reg`;
        textoReg.textContent = `Registrar`;
        textoErro.id = `p-reg-erro`;

        inputNome.id = `input-nome`;
        inputNome.type = `text`;
        inputNome.placeholder = `Nome de usuário`;
        inputNome.required = true;

        inputPassword.id = `input-passw`;
        inputPassword.type = `password`;
        inputPassword.placeholder = `Insira uma senha`;
        inputPassword.required = true;

        divRegisterBotoes.id = 'div-register-botoes';

        buttonRegister.id = `button-register`;
        buttonRegister.type = `submit`;
        buttonRegister.value = 'Registrar';
        buttonRegister.className = 'botoes';

        buttonVoltar.id = `button-reg-voltar`;
        buttonVoltar.type = `button`;
        buttonVoltar.value = `Voltar`;
        buttonVoltar.className = 'botoes';
        buttonVoltar.addEventListener('click', () => {
            formRegPlayer.remove();
            montarPagina();
        })

        divRegister.appendChild(textoReg);
        divRegister.appendChild(textoErro);
        divRegister.appendChild(inputNome);
        divRegister.appendChild(inputPassword);
        divRegisterBotoes.appendChild(buttonVoltar);
        divRegisterBotoes.appendChild(buttonRegister);
        divRegister.appendChild(divRegisterBotoes);

        formRegPlayer.addEventListener("submit", (e) => {
            e.preventDefault();
            let usuario = document.getElementById('input-nome').value;
            let senha = document.getElementById('input-passw').value;
            registrarPlayer(usuario, senha);
        });

        formRegPlayer.appendChild(divRegister);
        sectionRegPlayer.appendChild(formRegPlayer);
    }

    const registrarPlayer = (key, value) => {
        let senha = localStorage.getItem(key);
        let textoErro = document.getElementById('p-reg-erro');
        textoErro.style.fontSize = '14px';
        if (senha == null) {
            localStorage.setItem(key, value);
            textoErro.textContent = `Usuário ${key} registrado`;
            textoErro.style.color = `#01ff11`;
            setTimeout(() => {
                document.getElementById('div-register').remove();
                registroOuLogin();
            }, 1000);
        } else {
            textoErro.textContent = `Usuário ${key} já tem registro`;
            textoErro.style.color = `#ff0000`;
        }
    }

    criarSectionRegPlayer();
    montarPagina();
});