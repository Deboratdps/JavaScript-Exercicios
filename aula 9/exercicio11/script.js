let nomes = ["João", "Maria", "José", "Julia","Débora", "Paulo"];

const arrayNomes = (nome, novoNome, indice) => {
    console.log("Quantidade de elementos do array: ", nome.length);
    console.log(`Você escolhe o indice ${indice} que é o elemento ${nome[indice]}`);
    console.log(`O nome ${novoNome} foi inserido no array`);
    nome.push(novoNome);
    console.log("A quantidade atual de elementos é de: ", nome.length);
}

arrayNomes(nomes,'Marisa', 2);