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
  idTicketManager: {
    type: Number,
    required: true,
  },
  versionKey: false,
  timestamp: true,
  ticketDate: {
    type: Date,
    required: true,
  },
});

const Ticket = model('Ticket', schema);

module.exports = Ticket;
