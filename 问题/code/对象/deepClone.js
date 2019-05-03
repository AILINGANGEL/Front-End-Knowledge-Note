function deepClone(obj) {
    if (typeof obj !== 'object') return obj;
    if (obj === null) return obj;
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