let obj = {
    x : 'hola',
    f : function(param1, param2) {
        console.log(this.x)
        console.log(param1, param2)
    }
}

obj.f('forma tradicional param 1', 'param 2')
obj.f.apply({x:'otro this diferente para apply'}, [2, 3])
obj.f.call({x:'otro this diferente para call'}, 'dos', 'tres')

