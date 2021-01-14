let obj = {}
obj.x = 'hola'
obj.m1 = function() {
    console.log(this.x)
}

let obj2 = {
    x : 'hola 2',
    m1 : function() {
        console.log(this.x)
    },
    m2 : ()=>{
        console.log(this.x)
    }
}

obj2.m2()