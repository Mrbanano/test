const User = require('../models/Users');
const Roles = require('../models/Roles');
const jwt = require('jsonwebtoken');
const config = require('../config');

const SignUp = async (req, res, next) => {
  try {
    //falta buscar si ya existe le usuario
    const { username, password, roles } = req.body;
    const newUser = new User({
      userName: username,
      password: await User.encryptPassword(password),
      roles: roles,
    });

    if (!roles || roles.length === 0) {
      const role = await Role.findOne({ name: 'moderator' });
      newUser.roles = [role._id];
    } else if (roles) {
      const foundRoles = await Roles.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 32400,
    });

    console.log(newUser);

    res.status(201).send({ token });
  } catch (error) {
    console.error('No se puede crear el usuario', new Error(error));
    next();
  }
};

const SignIn = async (req, res, next) => {
  res.send({ message: 'Hola' });
};

module.exports = {
  SignIn,
  SignUp,
};
