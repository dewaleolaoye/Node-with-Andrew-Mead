const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// add command
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
      describe: "add note",
      demandOption: true,
      title: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});
// remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "remove note",
      demandOption: true,
      title: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler(argv) {
    console.log("list note");
  }
});
// read
yargs.command({
  command: "read",
  describe: "read a note",
  handler() {
    console.log("read note");
  }
});
yargs.parse();
// console.log(yargs.argv);
