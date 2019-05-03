// 第一题:
console.log('****************');
console.log([, , , ].join('-')) // '--'

// 第二题:
console.log('****************');
var lowerCaseOnly = /^[a-z]+$/
console.log(lowerCaseOnly.test(null)) // true
console.log(lowerCaseOnly.test()) // true
// test对参数进行toString自动类型转换
// 第三题:
console.log('****************');
var a = new Date(0);
var b = new Date();
var c = Date(0);
console.log(a === b); //false
console.log(b === c); //false
console.log(b === c); //false

// 第四题:
console.log('****************');
var a = Function.length;
var b = (new Function()).length; // 形参的个数,第一个默认值之前的参数的个数，期望传入的参数的个数
console.log(a); // 1
console.log(b); //0
console.log((function(a, b = 1, c) {}).length); //1

// 第五题:
console.log('****************');
var min = Math.min();
var max = Math.max();
console.log(min); // Infinity
console.log(max); // -Infinity
console.log(min < max) //false

// 第六题:
console.log('****************');
console.log([3, 2, 1].reduce(Math.pow)) // 9
// console.log([].reduce(Math.pow)) // error: Reduce of empty array with no initial value

// 第七题:
console.log('****************');
var val = 'smty';
console.log('val is ' + (val === 'smty') ? 'something' : 'nothing'); // 'something'
// + 的优先级高于?

// 第八题:
console.log('****************');
console.log(7 % 2) // 1
console.log(4 % 2) // 0
console.log('13' % 2) // 1
// console.log(-9 %% 2) // error
console.log(Infinity % 2) // NaN

// 第九题:
console.log('****************');
console.log(parseInt(3, 8)) //3
console.log(parseInt(3, 2)) // NAN
console.log(parseInt(3, 0)) //3 传入0或者不传就以十进制来解析

// 第十题:
console.log('****************');
console.log([] == []) // false

// 第十一题:
console.log('****************');
console.log('5' + 3) // '53'
console.log('5' - 3) // 2 '- % /'等只适合数字，因此将字符串转换成数字
console.log(true + 2) // 3 没有字符串将布尔值转变成数字

// 第十二题:
console.log('****************');

function sideEffect(arr) {
    arr[0] = arr[2];
}

function bar(a, b, c) {
    c = 10;
    sideEffect(arguments);
    return a + b + c;
}

console.log(bar(1, 1, 1)); // 21

// 第十三题:
console.log('****************');
var x = [].reverse;
// x(); // error reverse is called on null or undefined

// 第十四题:
console.log('****************');
console.log(1 < 2 < 3) // true
console.log(3 < 2 < 1) // true

// 第十五题:
console.log('****************');
console.log(2 == [
    [2]
]) // true


// 第十六题:
console.log('****************');
var a = /123/;
var b = /123/;
console.log(a === b) // false;
console.log(a == b) // false

// 第十七题:
console.log('****************');
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = [1, 2, 4];
console.log(a == b) // false;
console.log(a === b) // false;
console.log(a > c) // false '1,2,3' > '1,2,4'
console.log(a < c) // true

// 第十八题:
console.log('****************');
console.log('1 2 3'.replace(/\d/g, parseInt)) // 1 nan 3,传入parseInt的参数分别是匹配到的结果。以及结果在字符串中的索引


// 第十九题: 实现Date.now()
console.log('****************');
Date.now = function() {
    return +new Date();
}

// 第二十题:
console.log('****************');
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
console.log(foo.x) // undefined
console.log(bar);

// 第二十一题:
console.log('****************');
console.log([1, 2, 3].map(parseInt)) // [1, NAN, NAN]
// 第二十题:
console.log('****************');