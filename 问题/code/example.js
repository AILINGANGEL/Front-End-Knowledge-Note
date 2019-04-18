var fn = function(a, b, c) {
    return a + b + c;
}

// curry(fn)(1)(2)(3)

function curry(fn, args = []) {
    return function() {
        let rest = [...args, ...arguments];
        if (rest.length === fn.length) {
            return fn.apply(null, rest);
        } else {
            return curry.call(null, fn, rest);
        }
    }
}


console.log(curry(fn)(1)(2)(3))
console.log(curry(fn)(1, 2)(3))


Number.prototype.add = function(num) {
    return this + num;
}

Number.prototype.reduce = function(num) {
    return this - num;
}

console.log((10).add(10).reduce(2).add(10));