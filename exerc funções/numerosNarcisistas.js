function narcissistic(value) {
    let stringValue = value.toString()
    const valueLength = stringValue.length
    let sumOfDigits = 0
    let intValue
    for(i = 0; i < valueLength; i++){
      intValue = parseInt(stringValue[i])
      sumOfDigits += intValue**valueLength
      console.log(sumOfDigits)
    }
    return sumOfDigits === value
}
console.log(narcissistic(153))