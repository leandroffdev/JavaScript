class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // Getters
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    // Show
    show() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
let pessoas = [];
console.log(pessoas);

const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const addPessoa = () => {
    res.innerHTML = '';
    pessoas.map((pessoa) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'pessoa');
        div.innerHTML = `<p>Nome: ${pessoa.getNome()} - Idade: ${pessoa.getIdade()}</p>`
        res.appendChild(div);
    })
    // res.innerHTML = pessoas
}

btn_add.addEventListener('click', () => {
    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');
    const p = new Pessoa(nome.value, idade.value);
    if(p.nome !== '' && p.idade !== '') {
        pessoas.push(p);
        nome.value = '';
        idade.value = '';
        nome.focus();
        console.log(pessoas)
        addPessoa()
    }
    
});