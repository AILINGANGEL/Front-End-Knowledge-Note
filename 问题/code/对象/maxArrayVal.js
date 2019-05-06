console.log(Math.max.apply(null, [1, 2, 3, 4]))

console.log([1, 2, 3, 4].reduce((acc, item) => item > acc ? item : acc));

console.log(Math.max(...[1, 2, 3]));
console.log([14, 3, 77, 30].reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue))