//p191 传入bind的其他参数会被当做科里化绑定给函数
function bind(fn, context) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function() {
        let newArgs = Array.prototype.slice.call(arugments);
        let finalArgs = newArgs.concat(args);
        return fn.apply(context, finalArgs);
    }
}