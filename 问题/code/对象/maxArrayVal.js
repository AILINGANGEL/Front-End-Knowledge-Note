console.log(Math.max.apply(null, [1, 2, 3, 4]))

console.log([1, 2, 3, 4].reduce((acc, item) => item > acc ? item : acc));

console.log(Math.max(...[1, 2, 3]))