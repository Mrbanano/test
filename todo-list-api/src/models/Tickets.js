const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
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
    },
    ticketDate: {
      type: String,
      required: true,
    },
    Delete: {
      type: Boolean,
    },
    versionKey: false,
  },
  { timestamps: true }
);

const Ticket = model('Ticket', schema);

module.exports = Ticket;
