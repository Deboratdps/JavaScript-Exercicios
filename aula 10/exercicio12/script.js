
const palavras = (palavra) => {
    console.log(`Esta palavra tem ${palavra.length} caracteres`);
    console.log(`A palavra ${palavra.toLowerCase()} ficou ${palavra.toUpperCase()}`);
    console.log(`A letra ${palavra[2]} é o 3º caracter da palavra ${palavra.toUpperCase()}`);
    console.log(`${palavra} ficou ${palavra.replace(palavra[2],'x')}`);
}

palavras('Débora');