//um exemplo simples de herança(com um pouco de abstração)
class Feline {
    constructor(name, specie, pelage) {
        this.name = name
        this.specie = specie
        this.pelage = pelage
    }
    purr() {
        console.log('not only cats purr.')
    }
    run() {
        console.log('*Starts to run*')
    }
}
class Cat extends Feline {
    constructor(name, specie, pelage) {
        super(name, specie, pelage)
        this.name = name 
        this.specie = specie
        this.pelage = pelage
    }
    meow() {
        console.log('Yes, cats can meow.')
    }
}
const cat = new Cat('Oliver', 'Cat', 'white')
cat.purr()
cat.run()
cat.meow()


//aqui foi definida a superclasse 'Shape' que tem as propriedades e métodos comuns a todas as classes que herdarem suas características
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }
    calcPerimeter() {
        console.log(`O perímetro desse polígono é de ${this.sides * this.sideLength} metros`)
    }
}
//a classe 'Square' herda todos as propriedade e métodos da superclasse 'Shape'
class Square extends Shape {
    constructor(sideLength) {
        //A palavra chave 'super' invoca o construtor da classe pai, acessando a propriedade 'sideLength' 
        super(sideLength)
        this.sideLength = sideLength
        this.name = 'square'
        this.sides = 4
    }
    calcArea() {
        const area = this.sideLength ** 2
        console.log(`A área do quadrado é de ${area.toFixed(2)} metros quadrados`)
    }
}
const square = new Square(5)
square.calcArea()
//A classe 'Square' não possui o método 'calcPerimeter' declarada nela mesma, então ela implementa o método que herdou da sua classe pai(Shape)
square.calcPerimeter()
//a classe 'Triangle' herda a classe 'Shape'
class Triangle extends Shape {
    constructor(sideLength) {
        //super invoca o construtor da classe 'Shape' para acessar a propriedade 'sideLength'
        super(sideLength)
        this.sideLength = sideLength
        this.name = 'triangle'
        this.sides = 3
    }
    //Aqui, se você percebeu é declarado um método igual a da classe pai 
    //Quando um método presente na classe pai é declarado na classe filha, ela sobscreve o método da classe pai
    //Dessa forma, quando diferentes classes implementam uma mesma função, mas com diferentes implementações, surge o pilar do polimorfismo.
    calcPerimeter() {
        console.log(`O perímetro do triângulo é de ${this.sides * this.sideLength} metros`)
    }
    calcArea() {
        const base = this.sideLength
        const altura = (this.sideLength * Math.cbrt(3)) / 2
        const area = (base * altura) / 2
        console.log(`A área do triângulo é de ${area.toFixed(2)} metros quadrados`)
    }
}
const triangle = new Triangle(10)
triangle.calcArea()
//já que a classe 'Triangle' possui sua própria implementação do método 'calcPerimeter' é executado a implementação declarada na classe filha
triangle.calcPerimeter()