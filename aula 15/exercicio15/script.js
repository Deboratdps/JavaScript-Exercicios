window.onload=function(){
    const tab = document.querySelector("#tabuada"); //captura o valor
    const btn = document.querySelector("#calcular");
    const resp = document.querySelector('#resposta');

    btn.addEventListener('click',function(){
        let numero = Number(tab.value);
        let tabuada = 0;
        resp.innerHTML = "";

        if(isNaN(numero)){
            resp.innerHTML = "Digite um um valor numérico válido";            
        } else{
            if(numero < 1 || numero > 10){
                resp.innerHTML = "Digite um valor entre 1 e 10";
            } else{
                resp.innerHTML = `Tabuada do ${numero}`;
                while(tabuada <= 10){     
                    resp.innerHTML += `<br> O numero ${numero} X ${tabuada} é igual a ${(numero*tabuada)}`;
                    tabuada++;
                }
            }
        }                 
    })
}
