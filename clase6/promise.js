const _ = require('underscore')

function crearPromise(idx) {
    return new Promise((resolve, reject) => {
        if (idx===1000) {
            reject('fallo la operacion')
            return
        }
        _.delay(()=>{ resolve('anduvo barbaro: ' + idx) }, 2000)
    })
}

/*
crearPromise(false)
.then(msg=>{
    console.log(msg)
    // return new Promise((res, rej)=>{ rej('hubo un error') })
    return 'siga siga'
})
.then(msg => {
    console.log('aca hay un then concatenado:' + msg)
})
.catch((err)=>{
    console.log(err)
})
*/

(async function() {
    let idx = 0
    while (true) {
        let resultado = await crearPromise(idx++)
        console.log(resultado)
        resultado = await crearPromise(idx++)
        console.log(resultado + ' --- concatenado')
    }
})()



