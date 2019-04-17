function object_create(a) {
    function F() {}
    F.prototype = a;
    return new F();
}

let a = {};
let b = object_create(a);
console.log(a.isPrototypeOf(b));