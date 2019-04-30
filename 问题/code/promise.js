//例1
// let p = new Promise((resolve, reject) => {
//     resolve(5);
// }).then(res => {
//     return res;
// }).catch(() => {
//     console.log('in catch');
// })

// p.then(res => {
//     console.log(res); // 会走到这里来，得到5
// })

// 例2: 每次调用then或者catch就会创建一个新的promise对象
// let p0 = new Promise((resolve, reject) => {
//     resolve(100);
// })

// let p1 = p0.then(value => {
//     console.log(value);
// })

// console.log(p0 === p1)

// 例3: then中可以return一个promise, 这个promise会在一个then中自动解析
// let p = new Promise(resolve => {
//     resolve(100);
// }).then(data => {
//     return Promise.resolve(data + 100);
// }).then(data => {
//     console.log(data);
// })

// 例4: Promise.resolve会自动解析所有的promise,解析的结果用最里层promise决议的结果
// let p = Promise.resolve(5);
// let p1 = Promise.resolve(Promise.resolve(p))
// p1.then(data => {
//     console.log(data)
// })
// console.log(p1 === p) // true
// Promise.resolve(Promise.resolve(Promise.reject(5))).then(data => {
//     console.log(data)
// }).catch(e => {
//     console.log('in catch', e);
// })

// 例5: Promise.reject
// Promise.reject(Promise.resolve(5)).then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log('in catch', e); //走到这里
//     return
// }).then(data => {
//     console.log('here', data); //走到这里
// })
// Promise.reject(Promise.reject(5)).then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log('in catch', e); //走到这里
//     return e;
// }).then(data => {
//     console.log('here', data); //走到这里
// }).catch(e => {
//     console.log('bingo', e);
// })
