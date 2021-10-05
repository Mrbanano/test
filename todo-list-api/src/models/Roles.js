const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: String,
  },
  { versionKey: false, timestamps: true }
);

const Role = model('Role', schema);

module.exports = Role;
