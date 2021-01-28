const mongoInterface = require('./lib/MongoInterface')
const fake = require('./lib/genusuario')
const asyncforloop = require('./lib/asyncforloop')
const {ver, executeIfExist} = require('./lib/utiles')


asyncforloop(10000, (item, next)=>{
    ver(item)
    mongoInterface.insert('viajando', 'usuarios', fake(), ()=> {
        next()
    })
}, ()=>{
    ver('fin de la insercion')
})
