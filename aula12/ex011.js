const idade = 21
if (idade >= 18) {
    console.log('Voto obrigatório')
} else if (idade >= 16 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Não vota')
}