function crearObjeto() {
    let x = 0
    return {
        sumar: ()=>{ x++ },
        restar: ()=>{ x-- },
        mostrar: ()=>{console.log(x)}
    }
}

let obj = crearObjeto()
obj.sumar()
obj.mostrar()
obj.sumar()
obj.mostrar()
obj.restar()
obj.restar()
obj.restar()
obj.mostrar()
console.log(obj.x)