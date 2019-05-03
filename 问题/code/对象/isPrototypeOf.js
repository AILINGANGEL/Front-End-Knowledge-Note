Object.prototype.isPrototypeOf = function(obj) {
    let proto = obj.__proto__;
    while (proto !== null) {
        if (this === proto) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
};

let a = {};
let b = Object.create(a);
console.log(b.isPrototypeOf(a))
console.log(b.isPrototypeOf(b))
console.log(a.isPrototypeOf(b))