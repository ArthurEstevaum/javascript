function pesquisar(lista, item) {
    //guarda a primeira posição do array
    let primeiro = 0
    //guarda o último índice do array
    let ultimo = lista.length - 1
    //guarda o índice entre meio e fim da array
    let meio
    //guarda o valor do elemento na posição do meio
    let chute 
    /*Enquanto o primeiro índice do array for menor ou igual ao último,
     a variável meio vai receber o índice entre o fim e o começo da array
     e a variável chute testará se o elemento no índice meio é o item procurado
     se não for o caso, será testado se o item procurado é menor ou maior que o chute,
     o mesmo processo será repetido até que o valor procurado seja achado
      e a função retornará o índice que o valor foi encontrado*/
    while(primeiro <= ultimo) {
        meio = Math.trunc(ultimo/2)
        chute = lista[meio]
        if (chute == item) {
            return`O item procurado foi achado na posição[${meio}]`
        } else if(chute < item) {
            primeiro = meio + 1
        } else {
            ultimo = meio - 1
        }
    }
    return 'O item procurado não foi achado na lista'
}
const item = 3
const lista = [1, 2, 3, 4, 5, 6]
console.log(pesquisar(lista, item));