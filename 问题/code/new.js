function _new(func) {
    let target = {};
    target.__proto__ = func.prototype;
    let ans = func.call(target);
    if (typeof ans === 'object' || typeof ans === 'function') {
        return ans;
    }
    return target;
}