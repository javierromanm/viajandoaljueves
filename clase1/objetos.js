function funcion() {
    let a = 0        
    function incA() {
        a++
        console.log(a)
    }
    return incA
}

// este feature se denomina closure

let fn = funcion()

fn()
fn()
fn()
fn()
fn()
