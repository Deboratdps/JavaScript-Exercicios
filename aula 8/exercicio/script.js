let str = `Qualquer conteúdo!`;
let str2 = `Outra string ${str}`;
console.log(str2);


//Arrays - uma coleção de dados
//O array é constituido por elementos
const frutas = ["uva", "banana", "laranja", "melancia"];

let euGosto = `Eu gosto de ${frutas[0]}`;
console.log(euGosto);


const Pessoa = [
    "José", //0
    23, //1
    "Solteiro", //2
    "Futebol", //3
    1.70, //4
    cores = ["azul", "preto", "vermelho", "verde"] //5
];

let key = 2;

console.log(Pessoa.length);
console.log(Pessoa[5][key]); //array bidimensional

// (function(p){
//     const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]} eu também gosto de jogar 
//     ${Pessoa[3]} e tenho ${Pessoa[4]} de altura.`;

//     document.write(jose);
// })(Pessoa)

