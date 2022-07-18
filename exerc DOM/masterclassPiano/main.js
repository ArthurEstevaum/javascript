//pegar todas as notas do documento html
const keys = document.querySelectorAll('.key')

//tocar as notas
function playNotes(event) {
    let audioKeyCode = getKeycode(event)
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey) {
        return;
    }
    playAudio(audioKeyCode)
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function getKeycode(event) {
    let keyCode;
    const isKeyboard = event.type === 'keydown'
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}
//clicar com o mouse
keys.forEach(function(key) {
    key.addEventListener('click', playNotes)
})
//tocar com o teclado
window.addEventListener('keydown', playNotes)