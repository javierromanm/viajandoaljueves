const genUsuario = require('./lib/genusuario')
const asyncForLoop = require('./lib/asyncforloop')
const fs = require('fs')
const constante = require('./lib/modulosimple')

asyncForLoop(1000, (sub, next)=>{
    let obj = genUsuario()
    let txtEscribir = JSON.stringify(obj) + "\n"
    let composicionRuta = ['/home', process.env.USER, 
                    'archivos', obj.id + '.json'].join('/')

    fs.writeFile(composicionRuta, txtEscribir, 'utf8', err => {
        if (err) {
            console.log(err)
            console.log('no llamo a next')
        }
        next()
    })
})
