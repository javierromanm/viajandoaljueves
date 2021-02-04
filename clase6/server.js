const express = require('express')
const http = require('http')
const asyncForLoop = require('./lib/asyncforloop')
const mongoInterface = require('./lib/MongoInterface')
const {ver} = require('./lib/utiles')

const app = express()
app.use(express.json())

app.use(express.static('public'))
app.use('/static', express.static(__dirname + '/public'))

const BASE_DE_DATOS = 'viajando'
const COLECCION = 'clase6'

let arrBufferUsuarios = []
let itemActual = 0

// definicion del api
app.post('/upload', (request, response) => {
    request
    .on('data', data => {
        let texto = data.toString('utf8')
        let arrUsuarios = texto.split('\n')
        console.log(texto)
        arrUsuarios.forEach(usu => {
            arrBufferUsuarios.push(usu)
        })
    })
    .on('end', () => {
        console.log('fin')
        response.setHeader('Content-Type', 'application/json')
        response
            .status(200)
            .end(JSON.stringify({mensaje:'ok'}))
    })
})

app.get('/arrancar', (request, response)=> {
    response
        .status(200)
        .end(JSON.stringify({mensaje:'ok'}))

    asyncForLoop(arrBufferUsuarios.length, (idx, next) => {
        itemActual = idx
        let usuario = arrBufferUsuarios[idx]

        let itemsUsuario = usuario.split(';')

        let objInsertar = {
            id : itemsUsuario[0],
            firstName: itemsUsuario[1],
            lastName: itemsUsuario[2],
            city: itemsUsuario[3],
            streetName: itemsUsuario[4],
            country: itemsUsuario[5],
            accountName: itemsUsuario[6],
            account: itemsUsuario[7],
            amount: itemsUsuario[8]
        }

        mongoInterface.insert('viajando', 'clase6', objInsertar, (err) => {
            if (err) {
                console.log(err)
                return
            }
            setTimeout(next, 200)
        })
    })
})

app.get('/supervisar', (request, response) => {
    response
        .status(200)
        .end(JSON.stringify({progreso: itemActual}))
})

app.get('/usuario', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    let query = {}

    ver(request.query)

    if(request.query['firstName']) query.firstName = request.query['firstName']; 
    
    mongoInterface.query(BASE_DE_DATOS, COLECCION, query, (err, data)=>{
        if (err) {
            response
                .status(500)
                .end(JSON.stringify({err}))
            return;
        }

        ver('todo lo que vino del mongo es:')
        data.forEach(z => {
            ver('vino:')
            ver(z)
        })

        response
        .status(200)
        .end(JSON.stringify(data))
    })
})


app.get('/usuario/:id', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    let query = { id : request.params.id }

    ver(request.params)

    mongoInterface.query(BASE_DE_DATOS, COLECCION, query, (err, data)=>{
        if (err) {
            response
                .status(500)
                .end(JSON.stringify({err}))
            return
        }

        if (data.length === 0) {
            response
                .status(404)
                .end(JSON.stringify({err: 'usuario no encontrado'}))
            return
        }

        response
            .status(200)
            .end(JSON.stringify(data[0]))
            return
    })
})


app.delete('/usuario/:id', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    
    let query = { id : request.params.id }

    ver(request.params)

    mongoInterface.query(BASE_DE_DATOS, COLECCION, query, (err, data)=>{
        if (err) {
            response
                .status(500)
                .end(JSON.stringify({err}))
            return
        }
        mongoInterface.delete(BASE_DE_DATOS, COLECCION, data[0], (err) => {
            if (err) {
                response
                    .status(500)
                    .end(JSON.stringify({err}))
                return
            }
            response
                .status(200)
                .end(JSON.stringify({err: 'usuario borrado'}))
            return
        })
    })
})


// fin definicion del api

app.listen(3000, (err) => {
    ver('escuchando el puerto 3000')
})


