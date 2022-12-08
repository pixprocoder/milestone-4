const products = [
  { name: "Dell pc", price: 8922, color: "red", storage: "230gb" },
  { name: "Hp monitor", price: 3621, color: "white", storage: "100gb" },
  { name: "Camera", price: 663, color: "blue", storage: "630gb" },
  { name: "Asus pro", price: 52100, color: "green", storage: "2540gb" },
];

let cheapest = products[0];
for (const product of products) {
  if (product.price < cheapest.price) {
    cheapest = product;
  }
}
console.log(cheapest);
