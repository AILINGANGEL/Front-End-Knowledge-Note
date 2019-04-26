function _new(func) {
    return function() {
        let args = Array.prototype.slice.call(arguments);
        let target = Object.create(func.prototype);
        let res = func.apply(target, args);
        if (typeof res === 'object' || typeof res === 'function') return res;
        return target;
    }
}