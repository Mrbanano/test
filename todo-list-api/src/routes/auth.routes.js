var express = require('express');
var router = express.Router();

const { SignIn, SignUp } = require('../controllers/auth.controller');

/**
 * @swagger
 * tasgs:
 *  name: Auth
 *  description: Endpoint para realizar registro e inicio de sesion en la aplicacion
 *
 */

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *    summary: Crea un ticket en el sistema.
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:

 */
router.post('/signin', SignIn);
/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *    summary: Crea un ticket en el sistema.
 *    tags: [Auth]
 *    requestBody:
 *      required: true

 */
router.post('/signup', SignUp);

module.exports = router;
