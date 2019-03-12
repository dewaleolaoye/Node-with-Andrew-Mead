const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// create the add command
yargs.command({
  command: "add",
  describe: "use to add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      title: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      title: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});
// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function() {
    console.log("remove note");
  }
});
// create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function() {
    console.log("list note");
  }
});
// read
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function() {
    console.log("read note");
  }
});
yargs.parse();
// console.log(yargs.argv);
