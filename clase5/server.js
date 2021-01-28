const { application } = require('express')
const express = require('express')
const http = require('http')
const { endianness } = require('os')
const mongoInterface = require('./lib/MongoInterface')
const {ver} = require('./lib/utiles')

const app = express()
app.use(express.json())

app.use(express.static('public'))
app.use('/static', express.static(__dirname + '/public'))

const BASE_DE_DATOS = 'viajando'
const COLECCION = 'usuarios'

// definicion del api
app.get('/usuario', (request, response)=>{
    response.setHeader('Content-Type', 'application/json')
    
    let query = {}

    if(request.query['firstName']) query.firstName = request.query['firstName']; 
    
    mongoInterface.query(BASE_DE_DATOS, COLECCION, query, (err, data)=>{
        if (err) {
            response
                .status(500)
                .end(JSON.stringify({err}))
            return;
        }
        response
        .status(200)
        .end(JSON.stringify(data))
    })
})


// fin definicion del api

app.listen(3000, (err) => {
    ver('escuchando el puerto 3000')
})


