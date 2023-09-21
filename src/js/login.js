//pegar os valores do formulário

let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")

campoQtde.addEventListener("change", calcular)

//calcular o preço

function calcular(){
    //R$ 100 por tenis
   let qtde = campoQtde.value
   let valor = qtde * 100
   resultado.innerText = 'R$ ${valor}'
}

//mostrar o preço