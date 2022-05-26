window.onload=function(){
    let produtos = [
        {descricao:'Bolacha', preco:2.50},
        {descricao:'Marmelada', preco:5.50},
        {descricao:'Sabonete', preco:4.50},
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    const txtTotal = document.querySelector("#total");

    (()=>{
        let totalzinho = 0;

        for(let pro of produtos){
            const filhoLi = document.createElement('li');

            for(listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco',pro[listaP]);
                    totalzinho += pro[listaP];
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }                              
            }
        }
        txtTotal.value = totalzinho.toFixed(2);
    })(produtos)
}
