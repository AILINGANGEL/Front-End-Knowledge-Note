function object_create(a) {
    function F() {}
    F.prototype = a;
    return new F();
}

let a = {};
let b = object_create(a);
console.log(a.isPrototypeOf(b));


// p122
function inherit(p) {
    if(p === null) throw TypeError();
    if(Object.create) {
        return Object.create(p);
    }
    let type = typeof p;
    if(type !== 'object' && type !== 'function') throw TypeError();
    function F(){};
    F.prototype = p;
    return new F();
}