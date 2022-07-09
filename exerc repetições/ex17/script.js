function gerarTabuada() {
    const numeroInput = document.getElementById('numero')//Puxar os elementos <input> e <selection>
    const selectionTabuada = document.getElementById('selectionTabuada')
    selectionTabuada.innerHTML = ''

    if (numeroInput.value.length == 0) {
        alert('Preencha o campo do número para poder gerar a tabuada')
    } else {
        const numeroValor = Number(numeroInput.value)//transformar o input number em um tipo 'Number'
        for (let i = 1; i <= 10; i++) {
            let opt = document.createElement('option')
            selectionTabuada.appendChild(opt)
            opt.innerHTML = `${numeroValor} x ${i} = ${numeroValor*i}`
        } //criar as opções da tabuada dentro do elemento selection
    }
}