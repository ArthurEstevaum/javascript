function parOuImpar (numero) {
    if (numero % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
console.log(parOuImpar(5))

function soma (n1 = 0, n2 = 0) { 
    //o recebimento do valor zero nos parâmetros n1 e n2 são para o caso do valor do parâmetro n ser passado na chamada
    soma = n1+n2
    return soma
}
console.log(soma(4,5))

function fatorial (numero) {
    let fator = 1
    for (let i = numero; i > 1; i--) {
        fator *= i
    }
    return fator
}
console.log(fatorial(3))