const fs = require('fs')
const asyncForLoop = require('./lib/asyncforloop')
const _ = require('underscore')

let composicionRuta = ['/home', 
                    process.env.USER, 
                    'archivos'].join('/')

fs.readdir(composicionRuta, (err, arrArchivos)=>{
    /*
    _.forEach(arrArchivos, unArchivo=>{
        console.log(unArchivo)    
    })
    */
    let nombreArch = [
        '/home', 
        process.env.USER, 
        'archivos',
        arrArchivos[0]
    ].join('/')

    fs.readFile(nombreArch, 'utf8', (err, contArch)=>{
        console.log(contArch)
        fs.unlink(nombreArch, (err) => {
            if (!err) {
                console.log('el archivo' + nombreArch + ' fue borrado')
            }
        })
    })
    
})
