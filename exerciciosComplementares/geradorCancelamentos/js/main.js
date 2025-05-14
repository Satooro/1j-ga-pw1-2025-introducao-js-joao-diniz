document.addEventListener('DOMContentLoaded', () => {

    let aleatorio = ["gastar tudo em skin", "tuitar besteira", "acordar meio-dia", "mandar figurinha fora de hora",
        "fingir que não viu", "usar emoji irônico demais", "esquecer o aniversário dos outros",
        "assistir série dublada e julgar legendada", "mexer no celular no rolê", "reclamar de tudo",
        "só aparecer quando precisa", "esquecer de dar bom dia", "deixar no vácuo", "curtir foto antiga sem querer",
        "comentar com caps lock", "compartilhar fake news", "rir de piada ruim", "falar que prefere o frio",
        "ter opinião polêmica de propósito", "demorar 3 dias pra responder", "marcar o amigo na publi do Nubank",
        "cantar alto no fone", "falar que vai sair do WhatsApp e volta", "dar uma de coach", "falar “só observo”", "reagir com 👍 em tudo"
    ];


    function gerarRandom() {
        let number = Math.floor(Math.random() * aleatorio.length + 1);
        return number;
    }

    const buttonAdd = document.getElementById('buttonAdd');
    buttonAdd.addEventListener('click', () => {
        const inputMotivo = document.getElementById('input-motivo').value;
        const h3Motivo = document.getElementById('h3Motivo');
        if (aleatorio.includes(inputMotivo)) {
            h3Motivo.textContent = `${inputMotivo} já foi adicionado na lista!`;
            return;
        }
        if (inputMotivo < 2) {
            h3Motivo.textContent = `É necessario no mínimo 3 caracteres para o motivo`;
            return;
        } else {
            h3Motivo.textContent = `${inputMotivo} foi adicionado a lista.`;
            aleatorio.push(inputMotivo);
        }
    })

    const buttonNome = document.getElementById('buttonGerar');
    buttonNome.addEventListener('click', () => {
        const inputNome = document.getElementById('input-nome').value;
        const h3Nome = document.getElementById('h3Nome');
        let msg = (inputNome.length > 0 ? ` ${inputNome} foi cancelado por ${aleatorio[gerarRandom()]}` : `O nome precisa ser maior que 0.`);
        h3Nome.textContent = msg;

    })

    const verLista = document.getElementById('buttonVerLista');
    verLista.addEventListener('click', () => {
        verLista.textContent = `Verifique o console.`;
        verLista.style.color = "#fff";
        for (let i = 0; i <= aleatorio.length - 1; i++) {
            console.log(`${i} - ${aleatorio[i]}`);
        }
        setTimeout(() => {
            verLista.textContent = `Ver Lista`;
        }, "5000");
    })

});