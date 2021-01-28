let obj = {}
obj.prop1 = {}
obj.prop1.prop2 = {}
obj.prop1.prop2.prop3 = {}
obj.prop1.prop2.prop3.prop4 = 'hola mundo'

console.log(obj.prop1?.prop2.prop3.prop4)

if (obj.prop1?.prop2.prop3 === undefined) {
    console.log('no esta definido')
}

