import { Schema, model } from 'mongoose';

const schema = new Schema({
  idTaskManager: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  versionKey: false,
});

const User = model('User', schema);

module.exports = User;
