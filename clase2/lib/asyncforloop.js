function asyncForLoop(cantDeVeces, fn) {
    (function innerFn(x) {
        if (x===cantDeVeces) {
            return
        }
        fn(x, ()=>{
            innerFn(x+1)
        })
    })(0)
}

module.exports = asyncForLoop
