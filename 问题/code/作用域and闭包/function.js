// 第一题:
// var foo = 'hello';
// (function() {
//     var foo = foo || 'word';
//     console.log(foo); // word
// })();

// 第二题:
// console.log(parseInt(' 01')) //1
// console.log(parseInt('0918abc')) // 918

// 第三题:
// var ninjia = function myNinJia() {
//     console.log(ninjia === myNinJia);
// }

// ninjia() // true;
// myNinJia() // reference error]

// 第四题:
// var f = function() {
//     var a = b = 1;
// }

// f();
// console.log(b); // 1
// console.log(a); // a is not defined , reference error

// 第五题:
// var f = function() {
//     var a = b = 1;
// }

// setTimeout(f, 0);
// console.log(b); // reference error b is not defined

// 第六题:
// var a, b = 0;
// fn = function() {
//     var a = b = 1;
// }
// fn();
// console.log(a) // undefined;
// console.log(b) // 1

// 第七题:
// function f() {
//     for (var i = 0; i < 4; i++) {
//         var tc = setTimeout(function(i) {
//             console.log(i);
//             clearTimeout(tc);
//         }, 10, i);
//     }
// }
// f(); // 0, 1, 2

// 第八题:
// function fn() {
//     for (var i = 0; i < 4; i++) {
//         var tc = setInterval(function(i, tc) {
//             console.log(i);
//             clearInterval(tc);
//         }, 10, i, tc);
//     }
// }
// fn(); // 0, 1, 2, 3,3,3,3,3

// 第九题:
// function foo(a) {
//     var a; //重复声明被忽略
//     return a; // hello
// }
// console.log(foo('hello'));

// 第十题:
// function foo(a) {
//     var a = 'bye'; //赋值被覆盖
//     return a; // bye
// }
// console.log(foo('hello'));

// 第十一题:
// var name = 'word';
// (function() {
//     if (typeof name === 'undefined') {
//         var name = 'Jack'; //提升
//         console.log('Goodbye' + name);
//     } else {
//         console.log('hello' + name);
//     }
// })(); // 'Goodbye Jack';

// 第十二题:
// var number = 5;
// var obj = {
//     number: 3,
//     fn1: (function() {
//         var number;
//         this.number *= 2;
//         number = number * 2;
//         number = 3;
//         return function() {
//             var num = this.number;
//             this.number *= 2;
//             console.log(num);
//             number *= 3;
//             console.log(number);
//         }
//     })()
// }
// var fn1 = obj.fn1;
// fn1.call(null);
// obj.fn1();
// console.log(number);

let arry = [1, 2, 3, 4];

arry.forEach((item) => {
    item *= 10;
});
console.log(arry); //[1, 2, 3, 4]