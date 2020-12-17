const fs = require('fs')

console.log('arranca x aca ....')

fs.readFile('/viajandoaljueves/clase1/notas.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

for (let x = 0; x < 100000; x++) {
    console.log('.')
}


