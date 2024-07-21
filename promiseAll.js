const promise1 = new Promise((ressolve, reject) => {
    setTimeout(() => ressolve('Promisse 1 Resolvida'), 1000)
});
const promise2 = new Promise((ressolve, reject) => {
    setTimeout(() => ressolve('Promisse 2 Resolvida'), 500)
});
const promise3 = new Promise((ressolve, reject) => {
    setTimeout(() => ressolve('Promisse 3 Resolvida'), 100)
});
// Promise all -> Espera a resposta de todas
Promise.all([
    promise1,
    promise2,
    promise3
]).then((message) => {
    console.log(message);
})

// Promisse race -> Retorna somente a primeira promise resolvida
Promise.race([promise1, promise2, promise3]).then((message) => {
    console.log(message);
})