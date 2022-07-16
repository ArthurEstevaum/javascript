const cart = [
    {name: 'Dark souls', price: 95},
    {name: 'Shadow of tumb raider', price: 100},
    {name: 'Sekiro', price: 180},
    {name: 'Resident evil 2', price: 120},
    {name: 'Death Stranding', price: 150}
]

//para listar o nome dos jogos de forma organizada, podemos converter os objetos numa string que contém os nomes
/*
- Nome 1
- Nome 2
- Nome 3...
*/

const productList = cart.reduce((accumulator, {name}) => `${accumulator}- ${name}\n`, '')
console.log(productList);


