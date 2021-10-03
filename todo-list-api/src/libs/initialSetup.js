const Role = require('../models/Roles');
const User = require('../models/Users');
const config = require('../config');

const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'moderator' }).save(),
      new Role({ name: 'user' }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

const createDefaultAdmin = async () => {
  try {
    const foundAdmin = await User.findOne({ userName: config.DEFAULT_ADMIN });

    if (foundAdmin) return;

    const newUser = new User({
      userName: config.DEFAULT_ADMIN,
      password: await User.encryptPassword(config.DEFAULT_ADMIN_PASSWORD),
    });
    const role = await Role.findOne({ name: 'admin' });
    newUser.roles = [role._id];
    const defaultAdmin = await newUser.save();
    console.log('Default A listo');
  } catch (error) {
    console.log(error);
  }
};

const createDefaultModerator = async () => {
  try {
    const foundModerator = await User.findOne({
      userName: config.DEFAULT_MODERATOR,
    });

    if (foundModerator) return;

    const newUser = new User({
      userName: config.DEFAULT_MODERATOR,
      password: await User.encryptPassword(config.DEFAULT_MODERATOR_PASSWORD),
    });
    const role = await Role.findOne({ name: 'moderator' });
    newUser.roles = [role._id];
    const defaultModerator = await newUser.save();
    console.log('Default M listo');
  } catch (error) {
    console.log(error);
  }
};

const initialSetups = async () => {
  await createRoles();
  await createDefaultAdmin();
  await createDefaultModerator();
};

module.exports = { initialSetups };
