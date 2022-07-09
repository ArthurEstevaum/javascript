//contagem regressiva em recursão
function count(number) {
    console.log(number)
    if (number > 0) {
        count(number-1)
    }
}
count(6);

//fatorial em recursão
function fatorial(number) {
    if(number == 1) {
        return 1
    }
    return number * fatorial(number-1)
}
console.log(fatorial(5));

//fatorial é o produto de todos os inteiros positivos menores ou iguais a n. ex: 5*4*3*2*1
function factoriate(number) {
    let factorial = number;
    for (number; number > 1; number--) {
        factorial *= number - 1;
    }
    return factorial;
}
console.log(factoriate(6));
