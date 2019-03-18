setTimeout(() => {
  console.log("Two second up");
}, 2000);

const names = ["wale", "abiodun", "olaoye"];
const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames);
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
