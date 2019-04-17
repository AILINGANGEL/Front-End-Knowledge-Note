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