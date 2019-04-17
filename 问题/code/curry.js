function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// console.log(add(1)(2)(3))

function curry(fn, args = []) {
    return function() {
        let rest = [...args, ...arguments];
        if (rest.length < fn.length) {
            // return curry.apply(null, [fn, rest]);
            return curry.call(this, fn, rest);
        } else {
            return fn.apply(this, rest);
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum.length);

let currySum = curry(sum);
console.log(currySum(1, 2, 3))
console.log(currySum(1, 2)(3))