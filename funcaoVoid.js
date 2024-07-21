// utilizar a extensao code run -> ctrl + alt + n
console.log('ola mundo');
// função void()
let valor = 20;
function incrementa() {
    console.log('Estou dentro da função');
}
incrementa();

const msg = function () {}
const mensagem = () => {}

// fun;óes com parâmetro
function mostraNome(nome) {
    console.log(nome);
}
mostraNome('João');

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(10, 20));

function adicao(n1, n2) {
    let res = n1 + n2;
    console.log(res);
}
adicao(10, 20);

function recebeMostra(...rest) {
    let v = rest
    Array.let.forEach(element => {
        console.log(element);
    });
}
recebeMostra(1, 2, 3, 4, 5)