function largestNumber(num) {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
}
// const ages = largestNumber([23, 65, 7, 2, 445, 77]);
// console.log(ages);

function largestNumber(num) {
  let min = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}
const ages = largestNumber([23, 65, 7, 2, 445, 77]);
// console.log(ages);

// find even number
let getEvenNumbers = (arr) => {
  for (num of arr) {
    if (num % 2 === 1) {
      //   console.log(num);
    }
  }
  return;
};

getEvenNumbers([1, 2, 3, 4, 5, 6, 5, 7, 4, 5, 6, 10, 10]);

// find odd number
function oddNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 1) {
      console.log("odd number is: ", element);
    }
  }
}
oddNum([1, 2, 3, 4, 5, 6, 5, 7, 4, 5, 6, , 10]);
