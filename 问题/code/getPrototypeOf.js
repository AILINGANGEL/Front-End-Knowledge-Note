function getPrototypeOf(o) {
    if (typeof o !== 'object' || typeof o !== 'function') {
        throw TypeError();
    }
    if (o === null) return null;
    if ('__proto__' in o) {
        return o.__proto__;
    }
    return o.constructor.prototype;
}