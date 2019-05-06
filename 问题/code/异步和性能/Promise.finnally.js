Promise.prototype.finnaly = function(cb) {
    return this.then(function(value) {
        cb();
        return value;
    }, function(error) {
        cb();
        throw error;
    });
}

Promise.resolve(3).finnaly(function() {
    console.log('goes here');
}).then(function(data) {
    console.log(data);
})

Promise.reject(3).finnaly(function() {
    console.log('goes here');
}).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log('error', error)
})