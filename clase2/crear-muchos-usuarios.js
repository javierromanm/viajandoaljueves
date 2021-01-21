const genUsuario = require('./lib/genusuario')
const asyncForLoop = require('./lib/asyncforloop')
const fs = require('fs')
const constante = require('./lib/modulosimple')

let fnRndm =  () => Math.floor(Math.random() * 100)

asyncForLoop(1000, (sub, next)=>{
    let obj = genUsuario()
    obj.azar = {val1:fnRndm(), val2:fnRndm(), val3:fnRndm(), val4:fnRndm()}
    let txtEscribir = JSON.stringify(obj) + "\n"
    let composicionRuta = ['/var', 'node', 
                    'archivos', obj.id + '.json'].join('/')

    fs.writeFile(composicionRuta, txtEscribir, 'utf8', err => {
        if (err) {
            console.log(err)
            console.log('no llamo a next')
        }
        next()
    })
})
