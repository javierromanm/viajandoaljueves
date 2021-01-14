let variable1 = 'hola '
let variable2 = 'que tal'

function metodo1() {
    console.log(variable1)
}

function metodo2() {
    console.log(variable2)
}

module.exports = {
    metodo1, metodo2, 
    m3 : metodo2
}