function contar() {
    
    const start = document.getElementById('start')//puxar os elementos html do formulário
    const end = document.getElementById('end')
    const step = document.getElementById('step')
    const divContagem = document.getElementById('contagem')

    divContagem.innerHTML = '' //limpar a tela toda vez que a função for chamada novamente
    
    if (step.value === "" || start.value === "" || end.value === "") {
        window.alert('Preencha todos os campos')
    }//verificar se nenhum dos campos está vazio

    let valorStart  = Number(start.value)//transformar o valor desses elementos em números a serem manipulados
    let valorEnd = Number(end.value)
    let valorStep = Number(step.value)

    if (valorStep === 0) {
        window.alert('Insira um passo maior do que 0')
        valorStep = 1
    }

    if (valorEnd > valorStart) {
        for (let i = valorStart; i <= valorEnd; i += valorStep) {
            divContagem.insertAdjacentText('beforeend',`👉 ${i}`)
        }
        divContagem.innerHTML += '🏁'
    } //contagem progressiva
    else {
        for (let i = valorStart; i >= valorEnd; i -= valorStep) {
            divContagem.insertAdjacentText('beforeend',`👉 ${i}`)
        }
        divContagem.innerHTML += '🏁'
    } //contagem regressiva
}