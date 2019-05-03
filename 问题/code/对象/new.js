function _new(func) {
    return function() {
        let args = Array.prototype.slice.call(arguments);
        let target = Object.create(func.prototype);
        let res = func.apply(target, args);
        if (typeof res === 'object' || typeof res === 'function') return res;
        return target;
    }
}


function test() {
    this.a = 123;
    return function() {
        console.log('test');
    }
}

console.log(new test()); // 输出的是function