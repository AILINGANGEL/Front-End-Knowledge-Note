function curryFn(fn) {
    let args = [...arguments].slice(1);
    return function() {
        let newArgs = [...args, ...arguments];
        if (newArgs.length >= fn.length) {
            return fn.apply(this, newArgs);
        } else {
            return curryFn.call(this, fn, ...newArgs);
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
}

console.log(curryFn(sum, 1, 2, 3)())
console.log(curryFn(sum, 1, 2)(3))
console.log(curryFn(sum, 1)(2)(3))