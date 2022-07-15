//Aqui será implementada uma classe 'Headphone' em que será possível ligar e desligar
//aumentar e diminuir o volume, tocar música, e recarregar

/*O mais importante da implementação dessa classe é que todas essas funcionalidades só podem ser acessadas a partir
de código de dentro da classe, permitindo assim controlar a forma que os atributos são mudados e evitando efeitos colaterais.
O intuito é deixar bem definida a forma que os dados da classe serão acessados e modificados, escondendo esses dados,
e assim impossibilitando que sejam usados de maneira indevida.
*/
class Headphone {
    //os atributos definidos na classe com # são atributos privados
    //ou seja, o seu valor n pode ser acessado fora do escopo em que foi definido
    //atributos privados devem ser declarados no começo da classe(antes do construtor)
    #volume = 50
    #isOn = false
    #batteryCharge = 100
    constructor(brand, model, color) {
        this.brand = brand
        this.model = model
        this.color = color
    }
    //para que o valor de um atributo privado possa ser acessado, deve ser definido um getter
    //um getter é um tipo de função especial definido com a palavra chave get
    //um getter não deve possuir nenhum parâmetro e sua única função é retornar o valor de um atributo privado
    get on() {
        return this.#isOn
    }
    get vol() {
        return this.#volume
    }
    get charge() {
        return this.#batteryCharge
    }
    //para mudar o valor de um atributo da maneira que seja desejada, é usado um setter
    //um setter é semelhante à um getter, entretanto sua função é definir ou redefinir o valor de um atributo privado
    //também é declarado com a palavra chave set, e deve possuir um único parâmetro, o novo valor que o atributo receberá
    set changeVol(novoVolume) {
        if(novoVolume > 100 || novoVolume < 0) {
            console.log("Can't turn the volume above 100 or below 0")
        } else {
            this.#volume = novoVolume
        }
    }
    turnOn() {
        this.#isOn = true
    }
    turnOff() {
        this.#isOn = false
    }
    playMusic() {
        if(phillips.#isOn) {
        console.log("You listened your favorite music, your headphones discharged 10%")
        this.#batteryCharge -= 10
        } else {
            console.log("You can't play any music with your headphones off!")
        }
    }
    rechargeHeadphones() {
        console.log("You recharged your headphones, and now the battery is full")
        this.#batteryCharge = 100 
    }
}
const phillips = new Headphone('Phillips', 'unknown', 'black')

//displays the volume of 'phillips'
console.log(`Now, the volume of the headphone is ${phillips.vol}`)
//sets the volume of 'phillips' to 80
phillips.changeVol = 80
console.log(`Now, the volume of the headphone is ${phillips.vol}`)

//com o volume mais alto, agora tentando tocar uma música no fone
phillips.playMusic()

//mas o fone ainda está desligado.
phillips.turnOn()
console.log(phillips.on)

//com o fone ligado, agora você pode escutar música.
phillips.playMusic()

//para deixar o headphone totalmente carregado:
phillips.rechargeHeadphones()

//tentando acessar uma propriedade privada de 'Headphones', retorna undefined
console.log(phillips.isOn)

