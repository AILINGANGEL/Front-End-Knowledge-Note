Array.prototype.reduceFilter = function(fn, context) {
    return this.reduce((acc, item, index) => {
        if (fn.call(context, item, index, this)) {
            return acc.concat(item)
        }
        return [];
    }, []);
}