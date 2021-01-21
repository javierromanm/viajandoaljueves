const express = require('express');
const http = require('http');

let app = express()

app.get('/alumnos/', (request, response) => {
    let objRsp = {
        saludo : 'hola gente de viajando al jueves',
        hora: Math.floor(Date.now() / 1000)
    }
    response.status(200).end(JSON.stringify(objRsp));
})

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});