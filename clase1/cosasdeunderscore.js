const _ = require('underscore')

for (let x in _.range(20)) {
    console.log(x)
}

let unArray = [1,2,4,5,7,5,4, 12,3,3]

let criterioInclusion = _.filter(unArray, x => x % 3 == 0)

console.log(criterioInclusion)

criterioInclusion = unArray.filter(x => x % 4 == 0)

console.log(criterioInclusion)

