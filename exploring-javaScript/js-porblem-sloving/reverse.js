const greeting = "hello, good morning. how are you doing I am here for you.";

function reverseString(text) {
  let reverse = "";

  for (const letter of text) {
    reverse = letter + reverse;
  }
  return reverse;
}
const reversed = reverseString(greeting);
console.log(reversed);
