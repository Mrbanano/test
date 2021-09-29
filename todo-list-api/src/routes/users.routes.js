var express = require('express');
var router = express.Router();

const {
  createUser,
  getAllUsers,
  getUser,
  deleteUserById,
  updateUserById,
} = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', getAllUsers);

/* POST  user in listing. */
router.post('/', createUser);

/* GET  a user */
router.get('/:id', getUser);

/*UDPATE a  user  in listing. */
router.put('/:id', updateUserById);
/* DELETE a user  in listing. */
router.delete('/:id', deleteUserById);

module.exports = router;
