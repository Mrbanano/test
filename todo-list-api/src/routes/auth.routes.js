var express = require('express');
var router = express.Router();

const { SignIn, SignUp } = require('../controllers/auth.controller');

/* GET home page. */
router.post('/signin', SignIn);
router.post('/signup', SignUp);

module.exports = router;
