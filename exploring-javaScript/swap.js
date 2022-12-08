let first = 10;
let second = 4;
console.log(first, second);

// first approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// second approach
[first, second] = [second, first];
console.log(first, second);
