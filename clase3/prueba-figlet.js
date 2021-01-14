const figlet = require('figlet');
const asyncforloop = require('./lib/asyncforloop')
const _ = require('underscore')

asyncforloop(10, (x, next) => {
    figlet('Abdominales: ' + (x+1), function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        _.delay(next, 2000)
        console.log('\n\n\n\n\n\n\n\n')
    });
})
