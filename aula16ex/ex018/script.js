const buttonAdicionar = document.getElementById('adicionarButton')
const buttonFinalizar = document.getElementById('finalizarButton')
const inputNumero = document.getElementById('inputValores')
const selectLista = document.getElementById('selectLista')
const resultado = document.getElementById('resultado')

let valores = []

function isNumber(numero) {
    if(Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(numero, l) {
    if (l.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNumeros() {
    if (isNumber(inputNumero.value) && !inList(inputNumero.value, valores)) {
        valores.push(Number(inputNumero.value))
        const novaOption = document.createElement('option')
        novaOption.text = `O valor ${Number(inputNumero.value)} foi adicionado`
        selectLista.appendChild(novaOption)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    inputNumero.value = ''
    inputNumero.focus()
}

function analisar() {
    if(valores.lenght == 0) {
        alert('Não há valores na lista!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let position in valores) {
            soma += valores[position]
            if(valores[position] > maior) {
                maior = valores[position]
            }
            if(valores[position] < menor) {
                menor = valores[position]
            }
        }
        media = soma/total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>A lista dos números possui um total de ${total} valores.</p>`
        resultado.innerHTML += `<p>O maior valor da lista é ${maior} e o menor valor é ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores da lista é ${soma}</p>`
        resultado.innerHTML += `<p>A média entre todos os valores da lista é ${media}</p>`
    }
}

buttonAdicionar.addEventListener('click', adicionarNumeros)
buttonFinalizar.addEventListener('click', analisar)