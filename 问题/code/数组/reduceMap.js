Array.prototype.reduceMap = function(fn, context) {
    return this.reduce((acc, item, index) => acc.concat([fn.call(context, item, index, this)]), []);
}