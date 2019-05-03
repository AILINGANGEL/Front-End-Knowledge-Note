// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000)
// }

// 每隔1s输出5

// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000)
//     })(i);
// }

// 每隔1s输出0, 1, 2, 3, 4

// for (var i = 0; i < 5; i++) {
//     (function() {
//         let j = i;
//         setTimeout(function() {
//             console.log(j);
//         }, j * 1000)
//     })();
// }