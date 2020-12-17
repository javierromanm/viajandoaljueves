function m5() {
    let a = 'hola'
    console.log('llegue a M5')
}
function m4() {
    console.log('antes de llamar a m5')
    m5()
    console.log('despues de llamar a m5')
}
function m3() {
    console.log('antes de llamar a m4')
    let a = 'chau'
    m4()
    console.log('despues de llamar a m4')
}
function m2() {
    console.log('antes de llamar a m3')
    m3()
    console.log('despues de llamar a m3')
}
function m1() {
    console.log('antes de llamar a m2')
    m2()
    console.log('despues de llamar a m2')
}

m1()