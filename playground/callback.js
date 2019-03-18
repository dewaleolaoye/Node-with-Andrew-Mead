// setTimeout(() => {
//   console.log("Two second up");
// }, 2000);

// const names = ["wale", "abiodun", "olaoye"];
// const shortNames = names.filter(name => name.length <= 4);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };
//     callback(data);
//   }, 3000);
// };

// geocode("philadelphia", data => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {}, 2000);
  callback(a + b);
};

add(6, 4, sum => {
  console.log(sum);
});
