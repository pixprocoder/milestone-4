const numbers = [23, 4, 66, 23, 5, 67, 88, 2];

// system 1
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
}
// console.log(sum);

// system 2 using function
function totalSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const result = totalSum(numbers);
console.log(result);
