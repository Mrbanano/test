const User = require('../models/Users');
const Roles = require('../models/Roles');
const jwt = require('jsonwebtoken');
const config = require('../config');

const SignUp = async (req, res, next) => {
  try {
    const { username, password, roles } = req.body;

    /**
     *  check if the user has already been created
     */
    const foundUser = await User.findOne({
      userName: username,
    });

    if (foundUser) {
      //not found
      res.status(404).send({ message: 'user already created' });
    } else {
      /**
       * collecting user information
       */
      const newUser = new User({
        userName: username,
        password: await User.encryptPassword(password),
        roles: roles,
      });

      /**
       * default role
       */
      if (!roles || roles.length === 0) {
        const role = await Role.findOne({ name: 'moderator' });
        newUser.roles = [role._id];
      } else if (roles) {
        const foundRoles = await Roles.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map((role) => role._id);
      }

      /**
       * Save user
       */
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 32400,
      });
      /**
       * Return data
       */
      res.status(201).json({ token });
    }
  } catch (error) {
    console.error('No se puede crear el usuario', new Error(error));
    next();
  }
};

const SignIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    /**
     *search if the user is exis
     */
    const foundUser = await User.findOne({
      userName: username,
    }).populate('roles');

    if (foundUser) {
      /**
       *  the password match ?
       */
      const match = await User.comparePassword(password, foundUser.password);

      if (!match)
        return res
          .status(404)
          .send({ message: 'check your credentials and try again' });

      /**
       * create token and response
       */
      const token = jwt.sign({ id: foundUser._id }, config.SECRET, {
        expiresIn: 32400,
      });
      res.status(201).json({ token });
    } else {
      //not found
      res.status(404).send({ message: 'check your credentials and try again' });
    }
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

module.exports = {
  SignIn,
  SignUp,
};
