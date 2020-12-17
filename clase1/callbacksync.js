function fn1(fnOperacion, operando1, operando2) {
    return fnOperacion(operando1, operando2)
}

console.log('antes de llamar fn1')
console.log(fn1(function(a,b) { return a+b }, 3, 2))
console.log(fn1(function(a,b) { return [a,b] }, 3, 2))
console.log(fn1((a,b) => { return a-b }, 3, 2))
console.log(fn1((a,b) => a-b, 3, 2))
console.log(fn1((a,b) => [a,b], 3, 2))
console.log(fn1((a,b) => ({ope1:a, ope2:b}), 3, 2))
console.log(fn1((a,b) => { return {ope1:a, ope2:b}}, 3, 2))
console.log('desdes de llamar fn1')


