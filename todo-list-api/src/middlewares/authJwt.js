const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/Users');
const Role = require('../models/Roles');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ message: 'no token provided' });
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(403).send({ message: 'token invalid' });
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).send({ message: 'token invalid' });
  }
};

const isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId, { password: 0 });
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'moderator') {
        next();
        return;
      }
    }
    return res.status(403).send({ message: 'token invalid ' });
  } catch (error) {
    console.log(new Error(error));
    return res.status(403).send({ message: 'token invalid ' });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId, { password: 0 });
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name === 'admin') {
        next();
        return;
      }
    }

    return res.status(403).send({ message: 'token invalid ' });
  } catch (error) {
    console.log(new Error(error));
    return res.status(403).send({ message: 'token invalid ' });
  }
};

module.exports = { verifyToken, isModerator, isAdmin };
