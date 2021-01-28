/**
 * 
 * @param {*} arr, es un arra nada mas
 * @param {*} fnEach es una funcion que recibe
 *                   (item, next, abort)
 * @param {*} onFinish 
 */

function foreachAsync(arr, fnEach, onFinish) {
    const longitud = arr.length;
    (function fnInterna(subindice) {
        if (subindice === longitud) {
            onFinish(undefined)
            return
        }
        fnEach(arr[subindice], ()=>{
            fnInterna(subindice+1)
        }, ()=>{
            onFinish(new Error('se aborto en la iteracion' + subindice))
        })
    })(0)
}

module.exports = foreachAsync