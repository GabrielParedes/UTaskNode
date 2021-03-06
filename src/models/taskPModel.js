'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskPSchema = Schema({
  TaskTitle: String,
  TaskDescription: String,
  TaskStatus: String,
  TaskPriority: Number,
  UserId: {type: Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('TaskP', TaskPSchema);
