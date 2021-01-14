const asyncForLoop = require('./lib/asyncforloop')

asyncForLoop(100000, (item, next)=>{
    console.log(item)
    next()
})