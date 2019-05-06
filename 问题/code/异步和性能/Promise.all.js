Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length > 0) {
            let res = [];
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    res.push(data);
                    if (res.length === promises.length) {
                        resolve(res);
                    }
                }).catch(error => {
                    reject(error);
                    return;
                });
            }
        } else {
            resolve([]);
        }
    });
}


// Promise.all([]).then((data) => {
//     console.log('success ', data);
// }, (err) => {
//     console.log('err ', err);
// });
Promise.all([
    new Promise((resolve, reject) => { setTimeout(() => { resolve(100) }, 1000) }),
    new Promise((resolve, reject) => { setTimeout(() => { resolve(200) }, 200) }),
    new Promise((resolve, reject) => { setTimeout(() => { resolve(150) }, 100) })
]).then((data) => {
    console.log(data);
}, (err) => {
    console.log('here')
    console.log(err);
});

// Promise.all([
//     new Promise((resolve, reject) => { setTimeout(() => { resolve(100) }, 1000) }),
//     new Promise((resolve, reject) => { setTimeout(() => { resolve(200) }, 200) }),
//     new Promise((resolve, reject) => { setTimeout(() => { resolve(100) }, 100) })
// ]).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });