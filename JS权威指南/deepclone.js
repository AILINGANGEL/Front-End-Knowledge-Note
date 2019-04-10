function deepClone(obj) {
    // 这里有个是函数的情况，函数就浅拷贝吧 typeof function(){} === 'function'
    if (typeof obj !== 'object') return obj;

    // 如果是null
    if (obj === null) return null;


    //处理日期和正则
    // if (obj instanceof RegExp) return new RegExp(obj);
    // if (obj instanceof Date) return new Date(obj);
    let instance = new obj.constructor();

    for (let key in obj) {
        instance[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
    return instance;
}


var test = {
    a: null,
    b: 'test',
    c: 1,
    d: [1, 2],
    e: {
        a: 1
    },
    now: new Date(),
    reg: /[0-9]/
}

var testCopy = deepClone(test);
testCopy.e.a = 'a';
console.log(testCopy);
console.log(test);