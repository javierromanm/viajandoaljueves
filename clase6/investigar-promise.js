const genusucsv = require('./lib/genusuariocsv')
const asyncForLoop = require('./lib/asyncforloop')
const fs = require('fs')
const _ = require('underscore')
const { delay } = require('underscore')

/*
function crearPromise() {
    return new Promise((resolve, reject)=>{
        _.delay(()=>{ resolve('hola') }, 2000)
    })
}

crearPromise()
.then(resolucion=>{
    console.log(resolucion)
    return new Promise((resolve, reject) => {
        _.delay(()=>{ resolve('hola x segunda vez') }, 2000)
    })
})
.then(resolucion=>{
    console.log(resolucion)
})
*/

function appendFile() {
    return new Promise((resolve, reject)=>{
        let composicionRuta = ['/var', 'node', 
                    'archivos', 'usuarios.csv'].join('/')

        let linea = genusucsv() + "\n"            
        fs.appendFile(composicionRuta, linea, 'utf8', err => {
            if (err) {
                reject(err)
                return
            }
            delay(() => resolve('hola'), 2000)
        })
    })
}

async function iterar() {
    try {
        for (z in _.range(10)) {
            console.log(z)
            let resolucion = await appendFile()
            console.log(resolucion)
        }
    }
    catch (err) {
        console.log(err)
    }
}

function sumar(x, y) {
    return x + y
}



console.log('llamando a sumar')
console.log(sumar(2, 4))

let suma2 = _.partial(sumar, 2)
let sumaYaListaParaAplicar = _.partial(sumar, 200, 100)

console.log(sumaYaListaParaAplicar())

/*
asyncForLoop(2000, (sub, next) => {
    let linea = genusucsv() + "\n"
    
})

*/