const statusPantera = 'feliz';

const isPanteraFeliz = new Promise((resolve, reject) => {
    switch(statusPantera) {
        case 'feliz':
            resolve({   // callback caso positivo
                mensagem: "FELIZ"
            });
            break;
        case 'entediado':
            reject({   // callback caso negativo
                mensagem: "ENTEDIADO"
            });
            break;
        case 'triste':
            reject({   // callback caso negativo
                mensagem: "TRISTE"
            });
            break;
        default:
            reject({   // callback caso negativo
                mensagem: "EMOCIONALMENTE INDEFINIDO"
            });
            break;
    }
});

isPanteraFeliz.then((res) => {
    console.log('No primeiro then');
    return {mensagem: `${res.mensagem}`}
}).then((res) => {
    console.log('No segundo then');
    return {mensagem: `O Gato está ${res.mensagem}`}
}).then((res) => {
    console.log('No terceiro then');
    console.log(`Tudo certo! ${res.mensagem}`)
}).catch((error) => {
    console.log(`Deu ruim. O gato está ${error.mensagem}`);
})