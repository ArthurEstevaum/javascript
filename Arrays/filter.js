const topMovies = [
    {name: 'Minions 2', distributor: 'Universal studios', peopleAmount: 19_000_000},
    {name: 'Tropa de elite', distributor: 'Universal studios', peopleAmount: 11_000_000},
    {name: 'Cidade de deus', distributor: 'Paramount', peopleAmount: 10_000_000},
    {name: 'Vingadores: Guerra infinita', distributor: 'Disney', peopleAmount: 14_000_000},
    {name: 'Vingadores: Ultimato', distributor: 'Disney', peopleAmount: 19_000_000},
    {name: 'Rei leão', distributor: 'Disney', peopleAmount: 16_000_000}    
]
//Qual o total de pessoas que assistiram filmes da disney?

//usando filter e reduce juntos

const sumAmount = (accumulator, {peopleAmount}) => accumulator + peopleAmount
const amountPeopleDisney = topMovies
    .filter(({distributor}) => distributor === 'Disney')
    .reduce(sumAmount, 0)

console.log(amountPeopleDisney)//49 milhões

//usando filter e map juntos

//existe um ditado que diz que um ano de vida de um cachorro equivale à 7 vidas de um humano:
//então qual seria a idade humana equivalente dos cachorros dessa lista?
const pets = [
    {name: 'Boris', age: 4, gender: 'Male', type:'Dog'},
    {name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat'},
    {name: 'Pérola', age: 2, gender: 'Female', type: 'Dog'}, 
    {name: 'Lucy', age: 5, gender: 'Female', type: 'Cat'},
    {name: 'Cristal', age: 3, gender: 'Female', type: 'Dog'},
    {name: 'Chico', age: 6, gender: 'Male', type: 'Dog'}
]

const age = pets
    .filter(({type}) => type === 'Dog')
    .map(({name, age, gender, type}) => ({name,
    age: age * 7,
    gender,
    type,
    }))
console.log(age)