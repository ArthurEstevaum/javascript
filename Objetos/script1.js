class Produto {
    constructor() {
        this.id = 0
        this.nomeProduto = ''
        this.valor = 0
    }
    static adicionar() {
        alert('produto adicionado')
    }
    static remover() {
        alert('O produto foi removido')
    }
}
const buttonRemove = document.querySelector('button#remove')
const buttonAdd = document.querySelector('button#add')
const produto = new Produto()
buttonAdd.addEventListener('click', Produto.adicionar)
buttonRemove.addEventListener('click', Produto.remover)

