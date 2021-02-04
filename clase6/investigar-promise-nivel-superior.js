const genusucsv = require('./lib/genusuariocsv')
const asyncForLoop = require('./lib/asyncforloop')
const fs = require('fs')
const _ = require('underscore')
const { delay } = require('underscore')

function promisify(fnListaParaUsar) {
    return new Promise((resolve, reject)=>{
        fnListaParaUsar((err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

function agregarUsuario() {
    let composicionRuta = ['/var', 'node', 
                    'archivos', 'usuarios.csv'].join('/')
    let linea = genusucsv() + "\n"
    let quick = _.partial(fs.appendFile, composicionRuta, linea, 'utf8')
    
    promisify(quick)
    .then(() => {
        console.log('ESTOY EN EL THEN DEL PROMISIFY')
    })
    .catch(err => {
        console.log('ESTOY EN EL CATCHH DEL PROMISIFY')
        console.log(err)
    })
}

/*
async function iterar() {
    let composicionRuta = ['/var', 'node', 
                    'archivos', 'usuarios.csv'].join('/')

    try {
        for (z in _.range(10)) {
            let linea = genusucsv() + "\n"
            let quick = _.partial(fs.appendFile, composicionRuta, 
                                linea, 'utf8')
            let x = await promisify(quick)
            console.log(x)
        }
    }
    catch (err) {
        console.log(err)
    }
}

iterar()
*/

(async function() {
    let composicionRuta = ['/var', 'node', 
                    'archivos', 'usuarios.csv'].join('/')
    try {
        let quick = _.partial(fs.readFile, composicionRuta, 'utf8')
        let contenido = await promisify(quick)
        console.log(contenido)
    }
    catch (err) {
        console.log(err)
    }
})()