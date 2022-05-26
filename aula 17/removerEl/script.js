window.onload=function(){
    
    function calcular(idProduto, resultado){
        const preco = document.querySelectorAll(`#${idProduto} > li`); //captura o valor 
        const valorResultado = document.querySelector(`#${resultado}`);
        let totalzinho = 0;
        
        for(let i of preco){
            totalzinho += Number(i.datadet.preco);
        }

        valorResultado.value = totalzinho;
    }

    function removerProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`);

        for(let produto of lista){
            produto.addEventListener('click',function(){
                produto.remove();
                calcular('produtos','somaTotal');
            })
        }
    }

    removerProdutos('produtos');
    calcular('produtos','somaTotal');
}
