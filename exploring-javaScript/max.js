const number1 = 444;
const number2 = 222;
const number3 = 555;

// finding a smallest number through a function
function smallestNum(first, second, third) {
  if (first < second) {
    return first;
  } else if (second < third) {
    return second;
  } else {
    return third;
  }
}
const result = smallestNum(22, 3, 1);
console.log("The smallest number is: ", result);

// system 3 finding the largest number through a function
function largestNum(first, second, third) {
  if (first > second) {
    return first;
  } else if (second > third) {
    return second;
  } else {
    return third;
  }
}
console.log("The largest number is: ", largestNum(322, 343, 35));

// system 2 by using math operation
// const bigger = Math.max(number1, number2, number3);
// console.log(bigger);

// system 1 by using if else
// if (number1 > number2 && number1 > number3) {
//   console.log("number1 is bigger than everyone");
// } else if (number2 > number1 && number2 > number3) {
//   console.log("Number2 is bigger than everyone");
// } else {
//   console.log("number3 is bigger than everyone");
// }
