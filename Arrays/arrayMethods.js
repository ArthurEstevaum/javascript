let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//retorna o tamanho da lista
console.log(myArray.length)

//adiciona um elemento ao final da array
myArray.push(10)
console.log(...myArray)//1 2 3 4 5 6 7 8 9 10

//remove um elemento ao final da array
myArray.pop()
console.log(...myArray)//1 2 3 4 5 6 7 8 9

//remove um elemento ao começo da array
myArray.shift()
console.log(...myArray)//2 3 4 5 6 7 8 9

//adiciona um elemento ao começo do array
myArray.unshift(1)
console.log(...myArray)//1 2 3 4 5 6 7 8 9

//retorna O índice de um elemento na array
myArray.indexOf(6)
//5

//altera o conteúdo de uma array, removendo elementos a partir de um índice e adicionando elementos novos
myArray.splice(1, 3, 4, 6, 8) //o primeiro argumento diz a partir de qual índice vão ser removidos e adicionados elementos
//o segundo argumento diz quantos elementos serão removidos
//demais argumentos adicionam novos elementos a partir do índice especificado no primeiro argumento
console.log(...myArray)//1 4 6 8 5 6 7 8 9

//retorna uma cópia da array, a partir de um determinado começo até um determinado fim(a array original não é alterada)
//obs: slice() extrai até o fim, não incluindo o fim, ou seja, slice não extrai o índice fim para a nova array
const newArray = myArray.slice(1,4)//4 6 8 

//higher order array methods 

//O método map() chama uma função callback e a executa em cada elemento da array e cria uma nova array a partir dos retornos
//só elementos com valores válidos serão executados, se não for o caso serão desconsiderados
const dobrarValores = (element) => element * 2
const doubledArray = myArray.map(dobrarValores)//2 8 12 16 10 12 14 16 18

//cria uma nova array a partir dos elementos que passam num teste fornecido por uma função
//caso a função retorne true o elemento será passado para a nova array, caso seja false, não
const pairArray = myArray.filter(element => element % 2 == 0)//4 6 8 6 8

//reduce executa uma função em cada elemento da array, de forma a resultar num valor único, que inclusive não precisa ser uma array
//devem ser passados dois argumentos para reduce: a função callback e o valor inicial(que é atribuído ao acumulator na primeira execução)
//Na função callback existem dois parâmetros: o acumulador e o elemento atual da array
//Toda vez que a função callback é executada o acumulador recebe o retorno da função, por baixo dos panos
const sumOfAllElements = myArray.reduce((accumulator, number) => accumulator + number, 0)//54



