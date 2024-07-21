// FOR
for(let i = 0; i < 10; i++) {
    console.log(i);
}
const nomes = ['leandro', 'isabelle', 'alice'];
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
// FOR OF -> interar arrays
for (const nome of nomes) {
    console.log('Nome: ', nome)
}
// FOR IN -> interar objetos
var users = {
    name: 'Leandro',
    age: 30,
    address: 'Rua das Flores'
}
for (const key in users) {
    console.log('Nome: ', users[key])
}
// forEach(item, index, array) -> interar arrays de objetos
const usuarios = [
    { nome: 'Leandro', idade: 35 },
    { nome: 'Isabelle', idade: 29 },
    { nome: 'Alice', idade: 6 }
]
usuarios.forEach((item, index, array) => {
    console.log(item);
});
usuarios.forEach(function(item, index, array) {
    if(item.idade < 18) {
        console.log(`O usuário ${item.nome} é MENOR de idade!`)
    }
    else{
        console.log(`O usuário ${item.nome} é MAIOR de idade!`)
    }
});