Array.prototype.every = function(cb) {
    for (let i = 0; i < this.length; i++) {
        console.log(i)
        if (!cb(this[i], i, this)) {
            return false;
        }
    }
    return true;
}