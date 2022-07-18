//Destructuring nada mais é do que gerar uma cópia de um valor dentro de uma estrutura de dados

//destructuring pode ser aplicado em arrays:
let listaDeCompras = ['carne', 'frutas', 'pães', 'macarrão']

const [proteinas, fibras, carboidratos] = listaDeCompras
console.log(proteinas)//carne
//para ignorar algum elemento da array basta usar vírgula ao percorrer o seu índice.
//exemplo:
const [carne,,pães,macarrão] = listaDeCompras
//frutas não foi extraída da array

//também é usado o spread operator para extrair todos os itens ou o resto deles.

const [...resto] = listaDeCompras
console.log(resto)//[ 'carne', 'frutas', 'pães', 'macarrão' ]
const [Carne, ...outroResto] = listaDeCompras
console.log(outroResto)//[ 'frutas', 'pães', 'macarrão' ]

//Destructuring em objetos

//em objetos é possivel copiar o valor de propriedades e até renomear o nome das suas chaves.
//isso é feito escrevendo o nome da chave e envolvendo entre chaves: { key }
//para mudar o nome da chave: { key: otherKeyName }

let headphones = {
    brand: 'Sennheiser',
    model: 'HD600',
    priceInBrl: 3000
}

let { model: Name } = headphones
console.log(Name)//HD 600
Name = 'HD800'
console.log(Name)//HD800 
//obs: o objeto original não é alterado, pois o destructuring só gera uma cópia do atributo

//Numa função: 

const priceToUsd = ({ priceInBrl }) => (priceInBrl / 5.41).toFixed(2) + ' USD'
console.log(priceToUsd(headphones))