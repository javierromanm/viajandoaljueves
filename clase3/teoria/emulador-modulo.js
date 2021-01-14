function crearModulo() {
    let variable1 = 'hola '
    let variable2 = 'que tal'
    
    function metodo1() {
        console.log(variable1)
    }

    function metodo2() {
        console.log(variable2)
    }

    return {
        metodo1, metodo2, 
        m3 : metodo2
    }
}

var consumeModulo = crearModulo()
consumeModulo.metodo1()
consumeModulo.metodo2()
