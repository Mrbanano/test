const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const config = require('../config');

const SignUp = async (req, res, next) => {
  try {
    const { username, password, roles } = req.body;
    const newUser = new User({
      userName: username,
      password: await User.encryptPassword(password),
      roles: roles,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 32400,
    });

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
