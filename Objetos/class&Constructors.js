//Imagine que você quer criar mais de um objeto, porém com características semelhantes
//No caso de object literals você precisaria reescrever boa parte das propriedades e métodos
//Então, nesses casos de objetos com mesmas propriedades e métodos com diferentes valores, você pode usar classes e construtores para aumentar sua eficiência.
class Livro {
    nome = 'livro genérico'
    //A função especial 'constructor' é usada para definir quais serão os atributos da classe que deverão ser passados através de argumentos na chamada de seu instanciamento(em 'new Livro()')
    constructor(nome, gênero, autor) {
        this.nome = nome
        this.gênero = gênero
        this.autor = autor
    }
    //Abaixo do construtor são declarados os métodos pertencentes a classe
    informarSobre() {
        console.log(`O livro ${this.nome} é do gênero ${this.gênero} e seu autor é ${this.autor}`)
    }
    //Os métodos são chamados a partir do identificador da variável a qual foi instanciado o novo objeto da classe (por exemplo, 'livro.informarSobre()')
    //Entretanto, existe um tipo de método especial definido a partir da palavra 'static'
    //Quando um método é escrito na classe com essa palavra, o método só pode ser chamado a partir do nome da classe, além disso, um método estático não pode depender de algum dado que só exista num objeto instanciado da classe, nesse caso a chamada desse dado retornará 'undefined'.
    static virarPágina() {
        console.log('Você virou o livro para a próxima página')
    }
    static voltarPágina() {
        console.log('Você voltou uma página atrás do livro')
    }
}
const livro = new Livro('Os miseráveis', 'Romance', 'Victor Hugo')
console.log(livro)
livro.informarSobre()
Livro.virarPágina()
Livro.voltarPágina()