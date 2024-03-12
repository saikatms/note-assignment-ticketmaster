// notesController.js
// Controllers
const Note = require("../models/Note");
const { v4: uuidv4 } = require("uuid");

let notes = [];

const createNote = (req, res) => {
  const { title, content } = req.body;
  const id = uuidv4();
  const newNote = new Note(id, title, content);
  notes.push(newNote);
  res.status(201).json(newNote);
};

const getNotes = (req, res) => {
  res.json(notes);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

module.exports = { createNote, getNotes, deleteNote };
