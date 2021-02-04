function encapsuladorPromise(fnParcialmenteAplicada) {
    return new Promise((resolve, reject) => {
        fnParcialmenteAplicada((err, resultado)=>{
            if (err) {
                reject(err)
                return
            }
            resolve(resultado)
        })        
    })
}

module.export = encapsuladorPromise