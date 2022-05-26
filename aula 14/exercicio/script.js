//while
// let loop = 0;
// let cores = ["verde","vermelho"];
// while(loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

//do while
let teste = 0;
let cores = ["verde","vermelho"];
do {
    teste = Number(prompt("Digite 0 para sair"))


    switch(teste){
        case 0:
            alert("Saindo do sistema");
        break;
        case 1:
            alert("Cadastrando");
        break;
        case 2:
            alert("Consultando");
        break;
        default:
            alert("Opção inválida");
        break;
    }
} while(teste != 0)