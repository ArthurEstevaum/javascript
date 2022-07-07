function solveQuadratic(a, b, c) {
    const delta = (b * b)-(4 * a * c)
    if(delta < 0) {
        console.log('Essa equação não possui raízes reais')
    } else  if(delta > 0) {
        const raizPositiva = (-b + Math.sqrt(delta)) / (2 * a)
        const raizNegativa = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`A raiz positiva de X é ${raizPositiva} e a raiz negativa de X é ${raizNegativa}`)
    } else{
        const raiz = -b / (2 * a) 
        console.log(`X possui uma única raiz real (${raiz})`)
    }
}
solveQuadratic(-1, -4, 5)

