//concat() "junta" dois ou mais arrays;
// let nomes= ["José", "Nos todos", "João","Rafael"];
// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

// let todosNomes = nomes.concat(nomes2);

// console.log(todosNomes);
// let qtdArrayNome =  `O array nomes possui ${todosNomes.length} elementos`;
// console.log(qtdArrayNome);


//indexof() procura um determinado elemento de um array, retorna uma posição
            //  0        1        2         3
// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];
// let buscaNome="José";

// if(nomes2.indexOf(buscaNome) != -1){
//     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
// } else{
//     alert(`Não encontrei o nome ${buscaNome}`);
// }

//join() transforma elementos de um array em uma string
// let nomes2= ["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nomes2);
// console.log(nomes2.join());

//push() insere elementos no fim do array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.push("Maçã", "Laranja");
// frutas.push("Laranja");
// console.log(frutas.indexOf("Jaca"));
// let insertFruta = "Melancia";

// if(frutas.indexOf(insertFruta) == -1){
// console.log(`A fruta ${insertFruta} não está na lista`);
// frutas.push(insertFruta);
// } else{
//     console.log(`A fruta ${insertFruta} já está na lista`);
// }

// console.log(frutas);

//pop() remove o último elemento de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.pop();
// console.log(frutas);

//reverse() inverte a ordem dos elementos de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);

//shift() remove o primeiro elemento de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.shift();
// console.log(frutas);

//sort() ordena  elementos de um array em ordem crescente
// let numeros = [200, 2, 1, 189, 67];
// numeros.sort();
// console.log(numeros);

// let alfa = ["n", "p", "c", "a", "b","j"];
// alfa.sort();
// console.log(alfa);

//toString converte um array em uma string e retorna esta string
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// console.log(frutas.toString());

//unshift() insere um elemento no inicio do array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.unshift("Laranja");
// console.log(frutas);

//splice() corta ou remove um elemento de um array em um ponto indicado
//agrupar com indexof
let nomes = ["Mariana", "Patati Patata", "Xuxa", "Balão Magico"];
let indice = nomes.indexOf("Balão Magico");
let novosNomes = nomes.splice(indice,2);

console.log(nomes);
console.log(novosNomes);