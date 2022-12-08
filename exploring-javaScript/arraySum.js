const numbers = [45, 23, 2, 45, 77, 335, 632];

// function largest(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// const result = largest(numbers);
// console.log(result);

function negativeSum(sum) {
  let largest = sum[0];
  for (let i = 0; i < sum.length; i++) {
    const element = sum[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const negative = negativeSum([-12, -25, -125, -53, -6]);
console.log(negative);
