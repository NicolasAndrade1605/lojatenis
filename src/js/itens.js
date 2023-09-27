const items = [
    {
      id: 0,
      nome: 'camiseta',
      img: 'title.png',
      quantidade: 0
    },
    {
      id: 1,
      nome: 'short',
      img: 'title.png',
      quantidade: 0
    },
    {
      id: 2,
      nome: 'sapato',
      img: 'title.png',
      quantidade: 0
    },
  ]
  let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")

campoPrazo.addEventListener("input", function () {
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} semanas`
    calcular()
})

campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)

function calcular(){
    let qtde = campoQtde.value
    let valor = qtde * 100

    if (campoTipo.value == 2) valor += 1000

    if(campoLayoutSim.checked) valor += qtde * 50

    if(campoJs.checked) valor *= 1.1

    let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
    valor *= 1 + taxaDeUrgencia

    resultado.innerText = `R$ ${valor}`
}

