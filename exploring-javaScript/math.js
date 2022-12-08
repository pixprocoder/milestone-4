const myNumber = 10;
// const result = Math.abs(myNumber);
// const result = Math.ceil(myNumber);
// const result = Math.floor(myNumber);
// const result = Math.round(myNumber);
// const result = Math.random(myNumber) * 6;
// const rounded = Math.round(result);
// console.log(rounded);

for (let i = 0; i < 6; i++) {
  const result = Math.random(myNumber) * 6;
  const rounded = Math.round(result);
  console.log(rounded);
}
