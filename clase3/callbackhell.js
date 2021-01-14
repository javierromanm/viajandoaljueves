const fs = require('fs')
const asyncForLoop = require('./lib/asyncforloop')
const _ = require('underscore')
const mysql = require('mysql2')

const RUTA_ARCHIVOS = '/var/node/archivos'

const connection = mysql.createConnection({
    host     : '192.168.0.170',
    user     : 'root',
    password : 'admin',
    database : 'viajandoaljueves'
});

connection.connect(() => {
    fs.readdir(RUTA_ARCHIVOS, (err, arrArchivos)=>{
        asyncForLoop(arrArchivos.length, (idx, next)=>{
            let nombreArch = [RUTA_ARCHIVOS, arrArchivos[idx]].join('/')
            console.log([idx, nombreArch].join(' >>>>>> '))
            fs.readFile(nombreArch, 'utf8', (err, contArch)=>{
                let objPersona = JSON.parse(contArch)
                console.log(contArch)
                let template = 'INSERT INTO personas VALUES (?,?,?,?,?,?,?,?,?);'
                let {id,firstName,lastName,city,streetName,country,
                                    accountName,account,amount} = objPersona
                let arrContenido = [id,firstName,lastName,city,streetName,country,
                                    accountName,account,amount]
                console.log('este es el templte')
                console.log(template)
                console.log('este es el contenido')
                console.log(arrContenido)
                connection.execute(template, arrContenido, (err, result, fields)=>{
                    console.log(err)
                    console.log(result)
                    next()
                })
            })
        }, () => {
            console.log('Asunto terminado !!!!')
            connection.end()
        })
    })
})
