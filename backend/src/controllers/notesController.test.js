// notesController.test.js
const { createNote, getNotes, deleteNote } = require("./notesController");
const Note = require("../models/Note");

describe("Notes Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
      sendStatus: jest.fn(),
    };
  });

  describe("createNote", () => {
    test("should create a new note", () => {
      req.body = { title: "Test Note", content: "This is a test note" };
      createNote(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe("getNotes", () => {
    test("should return all notes", () => {
      const notes = [
        new Note("1710182145332", "Test Note 1", "Content 1"),
        new Note("1710182145333", "Test Note 2", "Content 2"),
      ];
      getNotes(req, res);
      expect(res.json).toHaveBeenCalledWith(notes);
    });
  });

  describe("deleteNote", () => {
    test("should delete a note by id", () => {
      req.params.id = "1";
      deleteNote(req, res);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });

    test("should return 404 if note not found", () => {
      req.params.id = "1710182145332";
      deleteNote(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Note not found" });
    });
  });
});
