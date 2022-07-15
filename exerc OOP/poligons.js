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

class Square extends Shape {
    constructor(sideLength) {
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
square.calcPerimeter()
class Triangle extends Shape {
    constructor(sideLength) {
        super(sideLength)
        this.sideLength = sideLength
        this.name = 'triangle'
        this.sides = 3
    }
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
triangle.calcPerimeter()