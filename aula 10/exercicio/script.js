//g/i/m
//g= global, analisa tudo
//i=icase sensitive, tira o case sensitive
//m=retorna uma string

//match() procura uma palavra em uma string
// let nome = "Débora dos Santos";
// console.log(nome.match("Santos"));

//search() procura pela ocorrencia e retorna a posição na cadeia da string
// let nome = "Débora dos Santos";
// console.log(nome.search(/d/i));

//replace() substitui uma string por outra
// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque adipisci eligendi obcaecati, fugiat molestias. Voluptatum ratione veniam, fugit, quibusdam omnis consequatur nam voluptas totam commodi, maxime atque eveniet ipsam?`;

// let strAtualizada = str.replace(/i/gi,'y');
// console.log(strAtualizada);

//localeCompare() efetua a comparaçção entre duas strings
// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(outroGato));
// console.log(gato.localeCompare(/Gato/gi));

//toString() irá converter um valor qualquer em uma string
// let num = Number('10');
// console.log(num.toString());

//toLowerCase() faz a conversão de uma string inteira para caracteres minúsculos
// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque adipisci eligendi obcaecati, fugiat molestias. Voluptatum ratione veniam, fugit, quibusdam omnis consequatur nam voluptas totam commodi, maxime atque eveniet ipsam?`;
// console.log(str.toLowerCase());

//toUpperCase() faz a conversão de uma string inteira para caracteres maiúsculos
// let str2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque adipisci eligendi obcaecati, fugiat molestias. Voluptatum ratione veniam, fugit, quibusdam omnis consequatur nam voluptas totam commodi, maxime atque eveniet ipsam?`;
// console.log(str2.toUpperCase());

//trim() faz a remoção de espaços antes e depois da string especificada
// let str = "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque adipisci eligendi obcaecati, fugiat molestias. Voluptatum ratione veniam, fugit, quibusdam omnis consequatur nam voluptas totam commodi, maxime atque eveniet ipsam?";
// let str2 = "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque adipisci eligendi obcaecati, fugiat molestias. Voluptatum ratione veniam, fugit, quibusdam omnis consequatur nam voluptas totam commodi, maxime atque eveniet ipsam?";

// console.log(str.trim());
// console.log(str2);

//NaN
//Quando uma string for convertida para Number(), parseInt() ou parseFloat() e não consiga efetuar a conversão, será retornado NaN (Not as Number)
//isNaN()
// let num = Number('djfsd');
// console.log(isNaN(num));

//toFixed() analisa um valor flutuante e retorna uma string conforme o parametro de casas
let valor = 2.545;
console.log(valor.toFixed(2));

//toLocaleString() irá retornar uma string com uma representação da moeda definida como no parametro currency.
//toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
