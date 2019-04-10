let test = [1, 2, 3, ['a', ['b', 'c']]];

// 方法一
// function flatenArray(arr, ans) {
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             flatenArray(item, ans);
//         } else {
//             ans.push(item);
//         }
//     })
// }
// 
// let ans = [];
// flatenArray(test, ans);
// console.log(ans);



// 方法二
// console.log(test.flat(Infinity));


//方法三 利用reduce函数
function flatenArray(arr) {
 return arr.reduce((ans,item)=> Array.isArray(item)? ans.concat(flatenArray(item)) : ans.concat(item), []);
}

console.log(flatenArray(test));