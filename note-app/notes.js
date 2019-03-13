const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "Your Note...";
};

// add note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter(note => note.title === title);
  // const duplicateNote = notes.filter(function (note) {
  //   return note.title === title;
  // });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log(chalk.green.inverse("New Note added"));
  } else {
    console.log(chalk.red.inverse("Note Title taken"));
  }
  saveNote(notes);
};

// remove note
const removeNote = title => {
  // console.log(title);
  const notes = loadNotes();
  const existingNote = notes.filter(note => note.title !== title);
  if (notes.length > existingNote.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNote(existingNote);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

// list notes
const listNote = title => {
  const notes = loadNotes();
};

// save note function
const saveNote = note => {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
