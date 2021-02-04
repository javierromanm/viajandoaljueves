const genusucsv = require('./lib/genusuariocsv')
const asyncForLoop = require('./lib/asyncforloop')
const fs = require('fs')

asyncForLoop(2000, (sub, next) => {
    let linea = genusucsv() + "\n"
    let composicionRuta = ['/var', 'node', 
                    'archivos', 'usuarios.csv'].join('/')

    fs.appendFile(composicionRuta, linea, 'utf8', err => {
        if (err) {
            console.log(err)
            console.log('no llamo a next')
            return
        }
        next()
    })
})