const paragrafo = document.createElement('p');
paragrafo.innerText = 'Olá mundo!';

const topo = document.createElement('header');
topo.innerHTML = '<h1>Olá H1</h1>';

const card = document.createElement('div');
card.style.width = '200px';
card.style.height = '200px';
card.style.backgroundColor = 'blue';
card.style.color = 'white';
card.style.borderRadius = '8px';
card.style.display = 'flex';

document.body.appendChild(topo);
document.body.appendChild(paragrafo);
document.body.appendChild(card);

card.appendChild(paragrafo);