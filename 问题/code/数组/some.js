Array.prototype.some = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

let ans = [1, 2, 3, 4, 5, 6, 7].some(item => item > 5);

console.log(ans)