function setPrototypeOf(obj, proto) {
    let cons = obj.constructor;
    obj.constructor.prototype = proto;
    obj.constructor.prototype.constructor = cons;
}

function setPrototypeOf(obj, proto) {
    obj.__proto__ = proto;
    return obj;
}