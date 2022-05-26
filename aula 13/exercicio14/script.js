let frutas = [
    {fruta: "Maçã", preco: 2.30},
    {fruta: "Melão", preco: 6.30}
]

let total = 0;

function listaFrutas(f){
    let total = 0;
    for(let produto of f){
        for(let p in produto){
            console.log(`${p} -> ${produto[p]}`); 
            total = produto[p];                      
        }         
        total += total;
    }

    console.log(`Total: ${total}`);
}

listaFrutas(frutas);