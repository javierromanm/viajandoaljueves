const genUsuario = require('./lib/genusuario')
const fs = require('fs')

let obj = genUsuario()

let txtEscribir = JSON.stringify(obj) + "\n"
console.log(obj)
console.log(txtEscribir)
console.log('----------------')
console.log(__dirname)
console.log('----------------')

let composicionRuta = ['/home', process.env.USER, 
                    'archivos', obj.id + '.json'].join('/')

console.log(composicionRuta)

fs.writeFile(composicionRuta, txtEscribir, 'utf8', err => {
    console.log(err)
})
