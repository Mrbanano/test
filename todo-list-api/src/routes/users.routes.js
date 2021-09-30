var express = require('express');
var router = express.Router();

const {
  createUser,
  getAllUsers,
  getUser,
  deleteUserById,
  updateUserById,
} = require('../controllers/user.controller');
/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generada por la base de datos.
 *        name:
 *          type: string
 *          description: titulo para la tarea.
 *        idTicketManager:
 *          type: number
 *          description: _id interno.
 *        Tickets:
 *          type: object
 *          description: Las tareas que tiene asignadas
 *      required:
 *        - idTicketManager
 *        - name
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: "Julio Hernadez"
 *        idTaskManager: 358
 *        tickets: [2232,232354,345345,3434534]
 *
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro el usuario
 *      example:
 *        msg: No se encontro el usuario
 *
 *  parameters:
 *    userId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: el id del usuario
 */

/**
 * @swagger
 * tasgs:
 *  name: Users
 *  description: Endpoint para realizar operaciones sobre los usuarios
 */

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Crea un usuario en el sistema.
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: El usuario fue creado exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      500:
 *        description: Algo fallo en el servidor
 *
 */
router.post('/', createUser);

/**
 * @swagger
 * /users:
 *  get:
 *   summary: Obtienes todas los usuarios en formato JSON
 *   tags: [Users]
 *   responses:
 *     200:
 *        description: lista de Usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Obtienes un usuario por su ID en formato JSON
 *    tags: [Users]
 *    parameters:
 *      - $ref: '#/components/parameters/UsersId'
 *    responses:
 *      200:
 *        description: El usuario se encontro
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Users'
 *      404:
 *        description: El usuario no exite
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.get('/:id', getUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Actualizas un usuario por su ID y lo regresa en formato JSON
 *    tags: [Users]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario se actualizo correctamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Users'
 *      404:
 *        description: El usuario no se actualizo correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userNotFound'
 */
router.put('/:id', updateUserById);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Elimina un usuario por su ID
 *    tags: [Users]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario se elimino correctamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Users'
 *      404:
 *        description: El usuario no se elimino correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userNotFound'
 */
router.delete('/:id', deleteUserById);

module.exports = router;
