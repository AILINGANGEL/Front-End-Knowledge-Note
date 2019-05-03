Function.prototype.bind = function(context) {
    let args = Array.prototype.slice.call(arguments, 1);
    let self = this;
    let fnop = function() {};
    let newFn = function() {
        args = [...args, ...arguments];
        //是否被new 调用
        return self.apply(this instanceof fnop && context ? this : context, args);
    }
    fnop.prototype = this.prototype;
    newFn.prototype = new fnop();
    return newFn;
}

Function.prototype.bind = function(context) {
    let self = this;
    let args = [...arguments].slice(1);
    return function() {
        return self.apply(context, [...args, ...arguments]);
    }
}

//p191 传入bind的其他参数会被当做科里化绑定给函数
function bind(context /*, args */ ) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
        let args = [...args, ...arguments];
        // self指代的是上层的函数
        return self.apply(context, args);
    }
}