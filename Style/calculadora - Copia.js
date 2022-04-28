document.getElementById('form').addEventListener('submit', calcular)

function calcular(e){
    e.preventDefault()

    let imovel = Number(document.getElementById('imovel').value)
    let entrada = Number(document.getElementById('entrada').value)
    let parcela = Number(document.getElementById('parcela').value)
    let valorp = (imovel - entrada) / (parcela)

    document.getElementById('resultado').innerHTML = `Valor por parcela = ${valorp.toFixed(2)}`
}