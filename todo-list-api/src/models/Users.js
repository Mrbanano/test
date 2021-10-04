const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    Delete: {
      type: Boolean,
      required: true,
    },
    roles: [{ ref: 'Role', type: Schema.Types.ObjectId }],
    tickets: [{ ref: 'Ticket', type: Schema.Types.ObjectId }],
  },
  { versionKey: false }
);

schema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  return await bcrypt.hashSync(password, salt);
};
schema.statics.comparePassword = async (password, recivedpassword) => {
  return await bcrypt.compare(password, recivedpassword);
};

const User = model('User', schema);

module.exports = User;
