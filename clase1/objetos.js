function funcion() {
    let a = 0        
    function incA() {
        a++
        console.log(a)
    }
    return incA
}

let fn = funcion()

fn()
fn()
fn()
fn()
fn()
