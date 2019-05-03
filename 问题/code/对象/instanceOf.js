function instanceOf(a, A) {
    if (typeof A !== 'function') return false;
    let proto = a.__proto__;
    while (proto !== null) {
        if (proto === A.prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}

console.log(instanceOf([], Array))
console.log(instanceOf([], Object))
console.log(instanceOf([], String))
console.log(instanceOf([], 1))

function Test() {}
console.log(instanceOf(new Test(), Test))