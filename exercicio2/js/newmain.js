document.addEventListener('DOMContentLoaded', () => {
    let divCorpo;


    const montarPagina = () => {
        divCorpo = document.getElementById('corpo');
        divCorpo.appendChild(criarRegOuLogin());
    }

    const criarRegOuLogin = () => {
        const sectionRegPlayer = document.createElement('section');
        sectionRegPlayer.id = 'section-player';

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

        divBotoes.appendChild(buttonRegister);
        divBotoes.appendChild(buttonLogin);

        sectionRegPlayer.appendChild(divBotoes);
        return sectionRegPlayer;

    }

    const criarRegPlayer = () => {
        const divBotoes = document.getElementById('div-botoes');
        divBotoes.remove();
        const formRegPlayer = document.createElement('form');
        formRegPlayer.id = 'form-player'

        const divRegister = document.createElement('div');
        const textoReg = document.createElement('p');
        const inputNome = document.createElement('input');
        const inputPassword = document.createElement('input');
        const buttonRegister = document.createElement('button');
        divRegister.id = 'div-register';
        textoReg.id = `p-reg`;
        textoReg.textContent = `Registrar`;

        inputNome.id = `input-nome`;
        inputNome.type = `text`;
        inputNome.placeholder = `Nome de usuário`;

        inputPassword.id = `input-passw`;
        inputPassword.type = `password`;
        inputPassword.placeholder = `Insira uma senha`;

        divRegister.appendChild(textoReg);
        divRegister.appendChild(inputNome);
        divRegister.appendChild(inputPassword);

        formRegPlayer.appendChild(divRegister);
        divCorpo.appendChild(formRegPlayer);
        return formRegPlayer;
    }



    montarPagina();
});