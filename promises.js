// Promise
const promise = new Promise((resolve, reject) => {
    let soma = 1 + 2;
    if(soma === 2) {
        resolve('Resolvido');
    }
    else {
        reject('Rejeitado');
    }
});
// Mensagem
console.log('Esperando promise...')

// Resposta
promise.then((res) => {
    console.log(res);
}).catch((reject) => {
    console.error(reject);
}).finally(() => {
    console.info('Promise finalizada');
});

