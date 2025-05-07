document.addEventListener('DOMContentLoaded', () => {
    let imagem = './assets/image.jpg';

    let conteudo = document.getElementById('conteudo')
    let img = document.createElement('img');
    img.src = imagem;
    img.style.width = '25%';
    conteudo.appendChild(img);
    let qntHover = 0;

    img.addEventListener('mouseover', () => {
        qntHover++;
        console.log(qntHover);
        if(qntHover>=15){
            img.remove();
            setTimeout(() => {
                conteudo.appendChild(img);
                img.style.marginLeft = `0px`;
                img.style.marginTop = `0px`;
                qntHover = 0;
            }, "3000");
        }
        // img.style.width = '50%';
        let left = Math.random()*200 + 100;
        let top = Math.random()*200 + 175;
        img.style.marginLeft = `${left}px`;
        img.style.marginTop = `${top}px`;
    });
    // img.addEventListener('mouseout', () => {
    //     // img.style.width = '25%';
    //     console.log(count);
    //     img.style.marginLeft = `0px`;
    //     img.style.marginTop = `0px`;
    // });

});