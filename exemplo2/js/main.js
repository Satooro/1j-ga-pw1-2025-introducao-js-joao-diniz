document.addEventListener('DOMContentLoaded', () => {
    let imagem;
    let conteudo;
    let qntHover = 0;
    const img = document.createElement('img');
    const montarPagina = () => {
        imagem = './assets/image.jpg';
        conteudo = document.getElementById('conteudo');
        criarImagem();
    }

    const criarImagem = () => {
        img.src = imagem;
        img.style.width = '25%';
        conteudo.appendChild(img);
    }

    img.addEventListener('mouseover', () => {
        moverImagem();
        contarMouseMover();
    });

    const ocultarImg = () => { 
        img.style.display = 'none';
    }
    const mostrarImg = () => {
        img.style.display = 'block';
        img.style.marginLeft = `0px`;
        img.style.marginTop = `0px`;
        qntHover = 0;
    }

    const contarMouseMover = () => {
        qntHover++;
        console.log(qntHover);
        if(qntHover>=5){
            ocultarImg();
            setTimeout(() => {
                mostrarImg()
            }, "3000");
        }
    }

    const moverImagem = () => {
        let left = Math.random()*200 + 100;
        let top = Math.random()*200 + 175;
        img.style.marginLeft = `${left}px`;
        img.style.marginTop = `${top}px`;
    }
    montarPagina();
});