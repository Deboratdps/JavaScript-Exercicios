// let i=2;
// for(let x=0; x < 10; x++){
//     console.log(`O valor da iteração é ${x} o i mais ele mesmo ${i++}`);
// }

// let Pessoas = {
//     nome: "Steve Rogers",
//     idade: 90,
//     heroi: "Capitão América"
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas[propriedades]);
// }


//array associativo
// arr = ["nome" => "Marcelo"];
// arr = [nome];

// let frutas = ["Melancia", "Manga", "Banana", "Uva"];

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }


let Herois = [
    {
        identidadeSecreta: "Steve Rogers", //0
        heroi: "Capitão América"
    },
    {
        identidadeSecreta: "Tony Stark", //1
        heroi: "Homem de Ferro"
    }
]

Herois.push({identidadeSecreta:"Diana",heroi: "Mulher Maravilha"});
Herois.push({identidadeSecreta:"Bruce Banner",heroi: "Hulk"});

for(let marvel of Herois){
    // console.log(marvel);
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`);
    }
}