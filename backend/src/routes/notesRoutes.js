// notesRoutes.js
// Routes
const express = require("express");
const {
  createNote,
  getNotes,
  deleteNote,
} = require("../controllers/notesController");

const router = express.Router();

router.post("/notes", createNote);
router.get("/notes", getNotes);
router.delete("/notes/:id", deleteNote);

module.exports = router;
