const friends = [
  "harry",
  "carry",
  "marry",
  "harry",
  "carry",
  "marry",
  "terri",
  "rohan",
  "das",
  "rohan",
  "rohan",
];

// removing duplicates from an array
function removeDuplicate(names) {
  const unique = [];
  for (const element of names) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
const result = removeDuplicate(friends);
console.log(result);
