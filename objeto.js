class Pessoa {
    // constructor() {
    //     this.nome = 'Leandro'
    // }
    constructor(name) {
        this.nome = name;
    }
}
// let p1 = new Pessoa();
let p1 = new Pessoa('Leandro');
let p2 = new Pessoa('Isabelle');
let p3 = new Pessoa('Alice');

// console.log(p1.nome);
// console.log(p2.nome);
// console.log(p3.nome);

class Carro {
    //Constructor
    constructor(nome, tipo) {
        this.nome = nome;
        if(tipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        }
        else if(tipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        }
        else if(tipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        }
        else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    //Getters
    getNome(){
        return this.nome;
    }
    getTipo(){
        return this.tipo;
    }
    getVelMax(){
        return this.velmax;
    }
    //Setters
    setNome(nome) {
        this.nome = nome;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setVelMax(velmax) {
        this.velmax = velmax;
    }
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`VelMax: ${this.velmax}`);
        console.log(`------------------------`)
    }
}
let c1 = new Carro('Rapidão', 1);
let c2 = new Carro('Super Luxo', 2);
let c3 = new Carro('Bombadão', 4);
let c4 = new Carro('Carrego tudo', 3);

let carros = [c1, c2, c3, c4]
// c1.info()
// c2.info()
// c3.info()
// c4.info()

// Obtendo informações pelos Getters
// console.log(`Nome: ${c1.getNome()}\nTipo: ${c1.getTipo()}\nVelMax: ${c1.getVelMax()}`);

carros.forEach(function(item) {
    // item.info()
    console.log(`Nome: ${item.getNome()}\nTipo: ${item.getTipo()}\nVelMax: ${item.getVelMax()}`);

});