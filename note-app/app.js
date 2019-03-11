const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

console.log(chalk.red.bold(validator.isURL("https://goal.com")));
console.log(chalk.green("Success"));
