Object.getPrototypeOf = function(obj) {
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        throw TypeError();
    }
    if (obj === null) return null;
    if ('__proto__' in obj) {
        return obj.__proto__;
    }
    return obj.constructor.prototype;
}