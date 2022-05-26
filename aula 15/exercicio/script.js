// let m = 'Laranja';

// console.log(typeof m);

// if(typeof m === 'number'){
//     console.log(`o dado informado é um number: ${m}`);
// } else {
//     console.log(`o dado informado não é um number: ${m} é um : ${typeof m}`);
// }

window.onload=function(){
    // alert("Olá povo do JS");

    const botao = document.getElementById('btn');
    const txtBox = document.querySelector("#txtBox"); //captura o valor
    const caixa = document.querySelector("#caixa");

    botao.addEventListener('click',function(){
        // alert(botao.value);
        // alert(txtBox.value);
        caixa.innerHTML += txtBox.value +' ';
    })
}