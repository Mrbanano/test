const createUser = (req, res, next) => {
  try {
    res.send('tickets');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getAllUsers = (req, res, next) => {
  try {
    res.send('tickets');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getUser = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const deleteUserById = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const updateUserById = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUserById,
  updateUserById,
};
