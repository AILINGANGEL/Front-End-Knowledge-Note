if (!Promise.race) {
    Promise.race = function(promises) {
        if (typeof [Symbol.iterator] !== 'function') {
            Promise.reject('args is not iterable');
        }
        if (promises.length > 0) {
            return new Promise(function(resolve, reject) {
                for (let i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then(function(msg) {
                        resolve(msg);
                        return;
                    }).catch(function(error) {
                        reject(error);
                        return;
                    });
                }
            });
        }
    }
}

Promise.race([]).then((data) => {
    console.log('success ', data);
}, (err) => {
    console.log('err ', err);
});
//抛错
Promise.race().then((data) => {
    console.log('success ', data);
}, (err) => {
    console.log('err ', err);
});
Promise.race([
    new Promise((resolve, reject) => { setTimeout(() => { resolve(100) }, 1000) }),
    new Promise((resolve, reject) => { setTimeout(() => { resolve(200) }, 200) }),
    new Promise((resolve, reject) => { setTimeout(() => { reject(100) }, 100) })
]).then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});