
// p130 and p182
function extend(o, p) {
    for(let prop in p){
        o[prop] = p[prop];
    }
    return o;
}

function A(name) {
    this.name = name;
}
A.prototype.getName = function() {
    return this.name;
}

function B(name, age) {
    A.call(this, name);
    this.age = age;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.getAge = function() {
    return this.age;
}

let test = new B('ailing', 28);
console.log(test.getName());
console.log(test.getAge());