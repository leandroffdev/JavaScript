// Async / Await
const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise cincoMil resolvida'), 5000);
});
const mil = () =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise mil resolvida'), 1000);
});
const quinhentos = () =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise quinhentos resolvida'), 500);
});
const cem = () =>  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise cem resolvida'), 100);
});
// 
const resolvedoraDePromisesAssincronas = async () => {
    const resultado1 = await cincoMil();
    const resultado2 = await quinhentos();
    const resultado3 = await cem();
    const resultado4 = await mil();
    
    console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`);
}

resolvedoraDePromisesAssincronas()