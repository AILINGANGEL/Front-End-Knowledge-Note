Function.prototype.bind = function(context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    return function() {
        context.fn(...arguments);
    }
}


var test = {
    name: 'ailing'
}

function bar(age) {
    console.log(this.name)
    console.log(age);
}

var foo = bar.bind(test);
foo(29);

//p191 传入bind的其他参数会被当做科里化绑定给函数
function bind(context/*, args */) {
    let self = this;
    let args = arguments;
    return function() {
        let args = [...args, ...arguments];
        // self指代的是上层的函数
        self.apply(context, args);
    }
}
