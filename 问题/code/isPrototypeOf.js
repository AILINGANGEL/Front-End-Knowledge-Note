// a是b的原型对象吗
function is_prototype_of(a, b) {
    let proto = b.__proto__;
    while (proto) {
        if (proto === a) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false
}
let a = {};
let b = Object.create(a);
console.log(is_prototype_of(a, b))