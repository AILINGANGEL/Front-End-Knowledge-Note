Promise.prototype.finnaly = function(cb) {
    return this.then(function(value) {
        //cb的结果也可能是异步的需要Promise.resolve
        return Promise.resolve(cb()).then(function() {
            return value;
        });
    }, function(error) {
        return Promise.resolve(cb()).then(function() {
            throw error;
        });
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