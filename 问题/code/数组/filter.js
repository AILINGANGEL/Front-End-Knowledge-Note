Array.prototype.filter = function(cb) {
    //使用in操作符，不会遍历稀疏数组中为空的元素;
    let ans = [];
    for (let index in this) {
        if (cb(this[index], index, this)) {
            ans.push(this[index]);
        }
    }
    return ans;
}