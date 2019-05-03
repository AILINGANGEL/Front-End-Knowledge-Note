Function.prototype.apply = function(context, rest = []) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    let result = context.fn(...rest);
    delete context.fn;
    return result;
}

var foo = {
    name: 'Selina'
}
var name = 'Chirs';

function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}

// Selina programmer 20
bar.apply(foo, ['programmer', 20]);
// 浏览器环境 Chirs teacher 25 
// node环境 undefined teacher 25
bar.apply(null, ['teacher', 25]);