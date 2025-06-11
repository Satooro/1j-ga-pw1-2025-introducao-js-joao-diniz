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

    const remover = (name) => {
        document.getElementById(name).remove();
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
        const buttonRegister = document.createElement('input');
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
        inputPassword

        buttonRegister.id = `button-register`;
        buttonRegister.type = `submit`;
        buttonRegister.name = 'Registrar';

        divRegister.appendChild(textoReg);
        divRegister.appendChild(textoErro);
        divRegister.appendChild(inputNome);
        divRegister.appendChild(inputPassword);
        divRegister.appendChild(buttonRegister);

        formRegPlayer.addEventListener("submit", (e) => { 
            e.preventDefault();
            let usuario = document.getElementById('input-nome').value;
            let senha = document.getElementById('input-passw').value;
            registrarPlayer(usuario, senha);
            setTimeout(() => {
                console.log('Olá usuário registrado');
            }, 3000);
        });
        git PushManager

        formRegPlayer.appendChild(divRegister);
        sectionRegPlayer.appendChild(formRegPlayer);
    }

    const registrarPlayer = (key, value) => {
        let senha = localStorage.getItem(key);
        let textoErro = document.getElementById('p-reg-erro');
        textoErro.style.fontSize = '14px';
        if(senha == null){
            localStorage.setItem(key, value);
            textoErro.textContent = `Usuário ${key} registrado`;
            textoErro.style.color = `#01ff11`;
        } else {
            textoErro.textContent = `Usuário ${key} já tem registro`;
            textoErro.style.color = `#ff0000`;
        }
    }



    montarPagina();
});