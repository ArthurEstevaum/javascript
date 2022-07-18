//O spread operator é quase que autodescritivo:
//ele basicamente espalha um objeto iterável em um tipo de dado individual

//exemplos:

let myArray = [138, 543, 64, 32]
console.log(Math.max(myArray))
//é esperado que o método math max retorne o valor mais alto(543)
//entretanto, é mostrado: NaN
//basicamente porque myArray é do tipo array, e por isso n é suportado como argumento
//então para que possamos usar todos os números da array como argumento
//se usa ... para espalhar os números como se estivessem separados uns dos outros.

console.log(Math.max(...myArray))//543

