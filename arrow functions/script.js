//arrow functions é uma maneira mais simples de declarar uma função
//arrow functions são um tipo de função anônima que substitui o uso da palavra chave 'function' por '=>'
const dobro = (number) => {
    return number * 2
}
console.log(dobro(5))
//10

//é possível reduzir ainda mais uma arrow function
const triplo = number => number * 3
console.log(triplo(3))
//9
//nesse caso, os parênteses dos parâmetros são omitidos quando há somente um parâmetro na função
//as chaves({}) e a palavra 'return' também são omitidos no caso da função executar um retorno simples em uma linha

//as arrow functions também tem pequenas diferenças sobre as funções declarativas normais, como o escopo e o objeto 'arguments'(que não existe nas arrow functions), então basicamente é interessante usar as arrow functions em funções simples.

const circumference = radius => 2 * Math.PI * radius
const circleArea = radius => Math.PI*(radius*radius)
const raio = 10
console.log(`A área de um círculo de ${raio}cm de raio é de ${circleArea(raio).toFixed(2)}cm`)
console.log(`O comprimento da circunferência de um círculo de ${raio}cm de raio é de ${circumference(raio).toFixed(2)}cm`)

const celsiusToFahrenheit = celsiusTemp => (celsiusTemp + 32)* 1.8
const temperaturaCelsius = 25
console.log(`A temperatura de ${temperaturaCelsius}°C é equivalente à ${celsiusToFahrenheit(temperaturaCelsius).toFixed(2)}°F`)

const findMax = (...args) => {
    args.sort()
    return args[args.length-1]
}
console.log(`O valor máximo entre os números da array é ${findMax(1,4,6,2,6,1,3,6,8)}`)

const showDateTime = () => {
    const data = new Date()
    const dia = data.getDate()
    const mês = data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    return `Hoje é ${dia}/${mês}/${ano} e são ${hora}:${minutos}`
}
console.log(showDateTime())