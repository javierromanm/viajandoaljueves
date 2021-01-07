function decirHola() {
    console.log('Hola alumnos....')
}

for (let z = 0; z < 100; z++) {
    setTimeout(decirHola, 3000)
    setTimeout(decirHola, 2000)
    setTimeout(decirHola, 1000)
}


for (let x=0;x < 100000; x++) {
    console.log('.')
}

