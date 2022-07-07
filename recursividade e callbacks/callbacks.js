//callbacks são funções que são chamadas quando alguma outra função é executada, seja de maneira síncrona ou assíncrona
//nesse caso, o callback será síncrono
function mostrarResultado(soma) {
    console.log(`A soma entre os dois números escritos como argumento na função "somar" é ${soma}`)
}
//A função "mostrar resultado" será passada como argumento na chamada da função "somar"
function somar(number1=1, number2=1, callback) {
    let soma = number1 + number2
    callback(soma)
} 
somar(2, 4, mostrarResultado)
//6