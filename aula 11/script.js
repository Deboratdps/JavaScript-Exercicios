// function Pessoa(nome){
//     this.nome = nome;

//     // this.msg = function(){
//     //     alert("Olá");
//     // }
// }

// Pessoa.prototype.msg = function(){
//      alert("Olá " + this.nome);
// }

// let novaPessoa = new Pessoa("José");
// let outraPessoa = new Pessoa("Maria");

// novaPessoa.msg();
// outraPessoa.msg();
// console.log(novaPessoa.nome);

//===============================================
// let Pessoa2 = {
//     'nome' : '',
//     'idade' : ''
// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá " + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Débora";
// P.msg();
// console.log(P);

//===============================================
let Pessoa3 = [
    {
        'nome': 'Débora',
        'idade': 30,    //indice 0
        'sexo': 'F'
    },
    {
        'nome': 'Paulo',
        'idade': 29,    //indice 1
        'sexo': 'M'
    },
    {
        'nome': 'Marisa',
        'idade': 40,    //indice 2
        'sexo': 'F'
    }
]

let NPessoa = Pessoa3;
NPessoa[0].nome;
console.log(`Existem ${NPessoa.length} pessoas cadastradas`);
console.log(NPessoa[0].nome);