const User = require('../models/Users');
const Role = require('../models/Roles');

const createUser = (req, res, next) => {
  try {
    res.send('tickets');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find({ Delete: false }, { password: 0 });
    res.status(200).send(result);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getAllMods = async (req, res, next) => {
  try {
    const ModRole = await Role.findOne({ name: 'moderator' });
    const Mods = await User.find(
      { roles: { $in: ModRole._id }, Delete: false },
      { password: 0 }
    );
    res.send(Mods);
  } catch (error) {
    console.log(next);
    return res.status(404).send({ message: 'Moderators not found' });
  }
};

const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await User.findOne(
      { _id: id, Delete: false },
      { password: 0 }
    ).populate('roles');
    res.json(result);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const deleteUserById = async (req, res, next) => {
  const id = req.params.id;
  const { Delete } = req.body;
  try {
    const userUpdate = await User.findByIdAndUpdate(
      { _id: id },
      { Delete },
      {
        new: true,
      }
    );
    res.status(201).send(userUpdate);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const updateUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const userUpdate = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).send(userUpdate);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  getAllMods,
  deleteUserById,
  updateUserById,
};
