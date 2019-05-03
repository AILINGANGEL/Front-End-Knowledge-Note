//方法一:

function flat(arr, ans) {
    if (!Array.isArray(arr)) {
        throw TypeError();
    }
    for (item of arr) {
        if (Array.isArray(item)) {
            flat(item, ans);
        } else {
            ans.push(item);
        }
    }
}

var ans = [];
var test = [1, 2, 3, { a: 1 },
    ['b', 'c', ['e', 'f']]
];
flat(test, ans);
console.log(ans);

//方法二:
function flat2(arr) {
    return arr.reduce((ans, item) => Array.isArray(item) ? ans.concat(flat2(item)) : ans.concat(item), []);
}

console.log(flat2(test));

//方法三
Array.prototype.flaten = function() {
    return this.reduce((ans, item) => Array.isArray(item) ? ans.concat(item.flaten()) : ans.concat(item), []);
}

var test = [12, [3, 4, [5, 6],
    [7]
]]

console.log(test.flaten())