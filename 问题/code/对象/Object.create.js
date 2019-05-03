function object_create(a) {
    function F() {}
    F.prototype = a;
    return new F();
}

let a = {};
let b = object_create(a);
console.log(a.isPrototypeOf(b));


// p122
function object_create(p, o) {
    if (p === null) throw new TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    let type = typeof p;
    if (type !== 'object' && type !== 'function') throw new TypeError();

    function F() {};
    F.prototype = p;
    let target = new F();
    Object.defineProperties(target, o);
    return target;
}