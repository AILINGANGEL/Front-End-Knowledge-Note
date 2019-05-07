Array.prototype.reduce = function(cb, start) {
    if (this.length === 0) {
        throw Error('cannot be called on empty array');
    }

    let ans;
    let i;
    if (!start) {
        i = 1;
        ans = this[0];
    } else {
        i = 0;
        ans = start;
    }
    while (i < this.length) {
        ans = cb(ans, this[i], i, this);
        i++;
    }
    return ans;
}