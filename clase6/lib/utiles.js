const _ = require('underscore')

function executeIfExist(obj, fn) {
    if (obj) {
        fn.apply(undefined, [obj])
    }
}

function ver(...items) {
    _.forEach(items, z=>console.log(z))
}

function showIfExist(err) {
    if (err) {
        console.log(err)
    }
}

module.exports = {
    executeIfExist,
    ver,
    showIfExist
}