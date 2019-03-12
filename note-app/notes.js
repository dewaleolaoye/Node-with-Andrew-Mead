const fs = require("fs");
const getNotes = function() {
  return "This from Note js";
};

const addNote = function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log("New Note added");
  } else {
    console.log("Note Title taken");
  }
  saveNote(notes);
};

const saveNote = function saveNote(note) {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = function() {
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
  addNote: addNote
};
