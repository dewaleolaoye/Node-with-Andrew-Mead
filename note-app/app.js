const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const command = process.argv[2];

// create the add command
yargs.command({
  command: "add",
  describe: "use to add new note",
  hancler: function() {
    console.log("Add a new note");
  }
});
// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  hancler: function() {
    console.log("remove note");
  }
});
// create list command
yargs.command({
  command: "list",
  describe: "list a note",
  hancler: function() {
    console.log("list note");
  }
});
// read
yargs.command({
  command: "read",
  describe: "read a note",
  hancler: function() {
    console.log("read note");
  }
});
console.log(yargs.argv);
