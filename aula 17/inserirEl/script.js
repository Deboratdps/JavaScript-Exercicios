window.onload=function(){
    const txtProduto = document.querySelector("#produto"); //captura o valor  
    const btnCadastrar = document.querySelector('#cadastrar');
    const lista = document.querySelector('#listaProdutos');

    btnCadastrar.addEventListener('click', function(){
        let li = document.createElement('li');
        lista.appendChild(li).setAttribute('class','listaFrutas'); //adiciona classe ao elemento
        lista.appendChild(li).textContent = txtProduto.value;
    })
}
