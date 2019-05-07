Array.prototype.map = function(cb) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        ans.push(cb(this[i], i, this));
    }
    return ans;
}