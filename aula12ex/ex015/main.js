function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const anoNascimento = document.getElementById('txtAno')
    const res = document.getElementById('res')
    if (anoNascimento.value > ano || anoNascimento.value.length === 0) {
        window.alert('ERRO! verifique os dados com atenção e tente novamente')
    } else {
        window.alert('Tudo ok')
    }
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')
    const sexo = document.getElementsByName('radioSex')
    const idade = ano - Number(anoNascimento.value)
    let gender = ''
    if (sexo[0].checked) {
        gender = 'Homem'
        if (idade < 10) {
            //criança
            img.setAttribute('src', 'boy_adobe_express.png')
        } else if (idade < 25) {
            //jovem
            img.setAttribute('src', 'young guy_adobe_express.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adult guy_adobe_express.png')
        } else {
            //idoso
            img.setAttribute('src', 'old man_adobe_express.png')
        }
        } else {
        gender = 'Mulher'
        if (idade < 10) {
            //criança
            img.setAttribute('src', 'girl_adobe_express.png')
        } else if (idade < 25) {
            //jovem
            img.setAttribute('src', 'young woman_adobe_express.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adult woman_adobe_express.png')
        } else {
            //idoso
            img.setAttribute('src', 'old woman_adobe_express.png')
        }
    }
    res.appendChild(img)
}