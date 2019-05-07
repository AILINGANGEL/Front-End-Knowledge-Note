Array.prototype.forEach = function(cb) {
    //使用in操作符，不会遍历稀疏数组中为空的元素;
    for (let index in this) {
        this[index] = cb(this[index], index, this);
    }
}