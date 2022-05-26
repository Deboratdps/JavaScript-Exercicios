window.onload=function(){
    const btnBuscar = document.querySelector('#btnBuscar');
    const txtNomeCli = document.querySelector("#nomeCliente"); //captura o valor  

    btnBuscar.addEventListener('click', function(){
        let dataSetCliente = txtNomeCli.dataSet.codigo;
        console.log(dataSetCliente);
    })
}
