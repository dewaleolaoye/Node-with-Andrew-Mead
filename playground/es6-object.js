// const product = {
//   label: "gold",
//   price: 2,
//   stock: 5,
//   salesPrice: undefined
// };

// const { label, stock } = product;

// console.log(label);
// console.log(stock);

// let johnDoe = ["John", "Doe", "Iskolo"];

// let [firstName, lastName, title] = johnDoe;
// console.log(firstName, lastName, title);

// let [firstName, , title] = "John Doe Iskolo".split(" ");
// console.log(firstName, title);

let johnDoe = {};

[johnDoe.first, johnDoe.last, johnDoe.title] = "John Doe Iskolo".split(" ");
console.log(johnDoe.first, johnDoe.title);
