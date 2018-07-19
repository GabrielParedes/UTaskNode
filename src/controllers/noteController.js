'use strict'
const express = require('express');
var Note = require('../models/noteModel');
var path = require('path');
var fs = require('fs');

function listNotes(req, res) {
  Note.findOne((error, notes) => {
    if (error) return res.status(500).send(err)
    return res.status(200).send(notes);
  })
}

/*Kitten.findById(req.params.kittenId, (err, kitten) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(kitten)
});*/

function createNote(req, res) {
  var note = new Note();

  note.NoteTitle = req.body.NoteTitle;
  note.NoteDescription = req.body.NoteDescription;
  //Foranea
  //note.NoteEmail = req.body.UserEmail;

  //note.save((err, noteStored)=>{
  if (err) return res.status(500).send({
    message: 'Note register Wrong'
  });

  if (noteStored) {
    res.status(200).send({
      note: noteStored
    })
  } else {
    res.status(404).send({
      message: 'Not registered'
    });
  }
  //});

}

function updateNote(req, res) {
  var noteId = req.params.id;

  Note.findByIdAndUpdate(noteId, req.body, {
      new: true
    }, (err, noteUpdated) => {
      if (err) return res.status(500).send({
        message: 'Error en la peticion'
      });
      if (!noteUpdated) return res.status(404).send({
        message: 'No se ha podido eliminar la nota'
      });
      return res.send(noteUpdated);
    )
  }
}

function deleteNote(req, res) {
  var noteId = req.params.id;

  Note.findByIdAndRemove(noteId, (err, noteDeleted) => {
    if (err) return res.status(500).send({
      message: 'Error en la peticion'
    });
    if (!noteDeleted) return res.status(404).send({
      message: 'No se ha podido eliminar la nota'
    });
    return res.status(200).send({
      message: 'Usuario eliminado'
    });
  });
}


module.exports = {
  listNotes,
  createNote,
  updateNote,
  deleteNote
}
