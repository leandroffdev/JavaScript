const cidades = ['Natal', 'Maxaranguape', 'Muriú', 'Ceará Mirim', 'Touros', 'Rio do Fogo', 'Parnamirim'];
document.body.innerHTML = ''
const body = document.querySelector('body');
const entrada = document.createElement('input');
entrada.type = 'number';
entrada.classList.add('quant');
entrada.placeholder = 'Quantidade';
entrada.value = '';
var quant = entrada.value;
body.appendChild(entrada);

function atualizaTela() {
    document.body.innerHTML = '';
    body.appendChild(entrada);
    for(let i = 0; i < quant; i++) {
        const card = document.createElement('div');
        const cardTitle = document.createElement('h1');
        card.appendChild(cardTitle);
        card.classList.add('card');
        cardTitle.textContent = cidades[i];
        body.appendChild(card);
    }
}
setInterval(function () {
    let n = document.querySelector('.quant').value;
    if(n != '') {
        quant = document.querySelector('.quant').value;
        atualizaTela()
    };
    document.querySelector('.quant').value = '';
    
},1000);


