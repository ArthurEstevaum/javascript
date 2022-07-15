//essa é a forma padrão de declarar um objeto em javaScript
let pessoa = {
nome: 'josé',
sexo: 'masculino',
peso: 85.4,
//um método é basicamente uma propriedade que contém uma função, portanto ela também pode ser escrita da seguinte forma:
//nomeDaFunção: function() {}
engordar(p = 0){
    console.log('engordou')
    //a palavra chave 'this' é uma referência ao objeto 'pessoa'(e dependendo do caso varia, de acordo com o escopo)
    this.peso += p 
}}
//para acessar uma propriedade de um objeto é chamado o seu identificador da variável a qual ela foi armazenada e a chave do seu atributo, respectivamente: 'pessoa' e 'engordar'
//variável.propriedade/método
pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
