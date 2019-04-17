function deepClone(obj) {
    if (obj === null) return null;
    if (typeof obj === 'function' || typeof obj !== 'object') return obj;

    let copy = new obj.constructor();
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            copy[key] = deepClone(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}