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

// let johnDoe = {};

// [johnDoe.first, johnDoe.last, johnDoe.title] = "John Doe Iskolo".split(" ");
// console.log(johnDoe.first, johnDoe.title);

// let obj = {
//   firstName: "John",
//   lastName: "Doe",
//   title: "Iskolo"
// };

// Object.keys(obj).forEach(key => {
//   console.log(`${key}: ${obj[key]}`);
// });

// console.log("===A New line===");
// let obj2 = {
//   firstName: "John",
//   lastName: "Doe",
//   title: "Iskolo"
// };

// for (let [key, value] of Object.entries(obj2)) {
//   console.log(`${key}: ${value}`);
// }

// let obj = {
//   name: "John Doe",
//   address: {
//     city: "lagos",
//     country: "Nigeria"
//   }
// };

// let { city, country } = obj.address;
// console.log(city, address);

let obj = {
  name: "John Doe",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
};
let { city, country } = obj.address;
console.log(city, country);
