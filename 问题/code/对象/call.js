Function.prototype.call = function(context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

var foo = {
    name: 'Selina'
}
var name = 'Chirs';

function bar(job, age) {
    console.log(job, age);
}

// Selina programmer 20
bar.call(foo, 'programmer', 20);
// 浏览器环境 Chirs teacher 25 
// node环境 undefined teacher 25
bar.call(null, 'teacher', 25);