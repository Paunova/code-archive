const arr = [null, 1, false, 2, '', 3, undefined];
const result = arr.filter(x => x);
const anotherResult = arr.filter(Boolean);
console.log('Array to be filtered from falsy values: ', arr);
console.log('Filtered array by x = > x: ', result);
console.log('Filtered array by Boolean: ', anotherResult);
