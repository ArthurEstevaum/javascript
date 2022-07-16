let array = [5,8,4,3,9,1]
array.push(2)
console.log(`Os valores dentro da array são: ${array}`)
/*for (let i = 0; i < num.length; i++) {
    console.log(`O valor da array 'num' na posição [${i}] tem o valor ${num[i]}`)
}*/
for (let position in array) {
    console.log(`O valor da array na posição [${position}] tem o valor ${array[position]}`)
}
console.log('______________________________________________')
let sum = 0
//soma todos os elementos da array
function sumAll(element) {
    sum += element
    console.log(`A soma entre os elementos do array agora é ${sum}`)
}
array.forEach(sumAll)