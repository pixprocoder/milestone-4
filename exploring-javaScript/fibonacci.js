// const fibo = [0, 1];

// for (let i = 2; i < 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibonacciSeries(num) {
  if (typeof num !== "number") {
    return console.log(" Enter a number");
  }
  if (num <= 2) {
    return console.log(" Enter a Positive Number boss");
  }
  const fibo = [0, 1];
  for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const userInput = fibonacciSeries(10);
console.log(userInput);
