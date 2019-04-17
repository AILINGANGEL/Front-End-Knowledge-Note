// 实现instance_of 
// instance_of (a, b) 判断a是不是b的一个实例

function instance_of(a, b) {
    let B = b.prototype;
    let A = a.__proto__;
    while (A !== null) {
        if (A === B) {
            return true;
        }
        A = A.__proto__;
    }
    return false;
}

console.log(instance_of([], Array))
console.log(instance_of([], Object))
console.log(instance_of([], String))

function Test() {}
console.log(instance_of(new Test(), Test))