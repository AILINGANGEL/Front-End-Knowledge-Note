// function flaten(arr, ans) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             ans.push(flaten(arr[i], ans));
//         } else {
//             ans.push(arr[i]);
//         }
//     }
// }


Array.prototype.flaten = function() {
    return this.reduce((ans, item) => Array.isArray(item) ? ans.concat(item.flaten()) : ans.concat(item), []);
}

let test = [12, [3, 4, [5, 6],
    [7]
]]

console.log(test.flaten())