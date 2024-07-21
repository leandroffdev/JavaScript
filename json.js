const res = document.querySelector('.res');
// Objeto
const pessoa = {
    nome: 'Leandro',
    idade: 35,
    profissao: 'Desenvolvedor',
    endereco: {
        logradouro: 'Av Cap Mor Gouveia',
        numero: 1135,
        bairro: 'Nossa Senhora de Nazaré',
        cidade: 'Natal',
        estado: 'RN',
        cep: '59560400'
    }
}

console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.endereco.logradouro);

//JSON
const string_pessoa = '{"nome":"Leandro","idade":35,"profissao":"Desenvolvedor","endereco":{"logradouro":"Av Cap Mor Gouveia","numero":1135,"bairro":"Nossa Senhora de Nazaré","cidade":"Natal","estado":"RN","cep":"59560400"}}'
const obj_string_pessoa = {}

//Convertendo Objeto para Json
const s_json = JSON.stringify(pessoa);
console.log(s_json);
res.innerHTML += s_json;

//Convertendo Json para Objeto
const objeto2 = JSON.parse(string_pessoa);
console.log(objeto2);
res.innerHTML += objeto2.endereco.logradouro

setInterval(() => {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const dia_semana = data.getDay();
    const dia_semana_texto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    res.innerHTML = data
}, 100)