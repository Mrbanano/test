import { Schema, model } from 'mongoose';

const schema = new Schema({
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  studen: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  idTaskManager: {
    type: Number,
  },
  versionKey: false,
  timestamp: true,
  taskDate: {
    type: Date,
  },
});

const Ticket = model('Ticket', schema);

module.exports = Ticket;
