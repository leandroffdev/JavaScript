// Async / Await
const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise cincoMil resolvida'), 5000);
});
const mil = () =>  new Promise((resolve, reject) => {
    // setTimeout(() => resolve('promise mil resolvida'), 1000);
    setTimeout(() => reject('promise mil rejeitada'), 1000);
});

const resolvedoraDePromisesAssincronas = async () => {
    const resultado1 = await cincoMil().then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        console.error(err);
        return err
    });
    console.log('Código aqui')
    const resultado2 = await mil().then((res) => {
        console.log(res);
        return res
    }).catch((err) => {
        console.error(err);
        return err
    });;
    
    console.log(`Mensagens: \n${resultado1} \n${resultado2}`);
    
}

resolvedoraDePromisesAssincronas()