let property_privada = 'Propiedad privada'

class Prueba {
    constructor() {
        this.x = 'hola alumnos'
    }
    m1() {
        console.log(this.x)
        return 'valor de salida 0'
    }
    m2() {
        console.log(property_privada)
    }
}

let prueba = new Prueba()
console.log(prueba.m1())
prueba.m2()