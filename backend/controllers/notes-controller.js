const Note = require('../models/note-model');

async function getNotes(req, res) {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function createNote(req, res) {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { getNotes, createNote };
