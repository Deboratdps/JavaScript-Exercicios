function valorImc(nome, altura, peso){
    a = Number(altura);
    p = Number(peso);

    let imc = p / (a*2);

    console.log(`Nome: ${nome}`);
    console.log(`Altura: ${altura}`);
    console.log(`Peso: ${peso}`);
    console.log(`IMC: ${imc}`);
}

nomePessoa = prompt("Digite seu nome");
altPessoa = prompt("Digite sua altura");
pesoPessoa = prompt("Digite seu peso");


valorImc(nomePessoa, altPessoa, pesoPessoa)