function carregar () {
    const body = document.getElementsByTagName('body')
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha-rounded.png'
        document.body.style.background = '#F2CA52'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde-rounded.png'
        document.body.style.background = '#D96B0B'
    } else {
        img.src = 'img/noite-rounded.png'
        document.body.style.background = '#394159'
    }
}