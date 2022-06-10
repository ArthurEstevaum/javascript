const agora = new Date()
let hora = agora.getHours()
if (hora < 5) {
    var ciclo = 'madrugada'
} else if (hora < 12) {
    var ciclo = 'manhã'
} else if (hora < 18) {
    var ciclo = 'tarde'
} else {
    var ciclo = 'noite'
}
console.log(`Agora são exatamente ${hora} horas da ${ciclo}`)