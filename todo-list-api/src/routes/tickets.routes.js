var express = require('express');
var router = express.Router();

const {
  getAllTickets,
  getTicket,
  createTicket,
  updateTicketById,
  deleteTicketById,
} = require('../controllers/tickets.controller');

/**
 * @swagger
 * tasgs:
 *  name: Tickets
 *  description: Endpoint para realizar operaciones sobre las tareas
 */

/**
 * @swagger
 * /tickets:
 *  post:
 *   summary: Crea una nueva tarea en el sistema
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 */
router.post('/', createTicket);

/**
 * @swagger
 * /tickets:
 *  get:
 *   summary: Obtienes todas las tareas en formato JSON
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 */
router.get('/', getAllTickets);

/**
 * @swagger
 * /tickets/:id :
 *  get:
 *   summary: Obtienes un ticket por su ID en formato JSON
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 */
router.get('/:id', getTicket);

/**
 * @swagger
 * /tickets/:id  :
 *  put:
 *   summary: Actualiza un ticket por su ID y lo retorna en  formato JSON
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 */
router.put('/:id', updateTicketById);

/**
 * @swagger
 * /tickets /:id  :
 *  delete:
 *   summary: Obtienes todas las tareas en formato JSON
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 */
router.delete('/:id', deleteTicketById);

module.exports = router;
