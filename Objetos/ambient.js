let pessoa = {nome: 'josé',
sexo: 'masculino',
peso: 85.4,
engordar(p = 0){
    console.log('engordou')
    this.peso += p 
}}
pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
