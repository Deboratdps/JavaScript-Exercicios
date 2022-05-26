function teste(){
    alert("Estou na function teste");
    // let nome = "Débora";
    return nome;
}

teste();

// let msg = ()=>{
//     alert("Estou feliz com JS");
// }

// msg();

let msg = (nome)=>{
    return nome;
}

console.log(msg("Maria"));


function teste(){
    let nome = "Débora";
    return nome;
}

// (function(produto, preco){
//     alert("O produto é "+produto+" e o preço é R$ "+preco);
// })("Biscoito", 2.50)


let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor1, valor2)=>{
    // let resultado = parseFloat(valor1) + parseFloat(valor2);
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}

soma(v1, v2);