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
 * components:
 *  schemas:
 *    Tickets:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generada por la base de datos.
 *        subject:
 *          type: string
 *          description: titulo para la tarea.
 *        studen:
 *          type: string
 *          description: Nombre del estudiante que levanta el reporte.
 *        description:
 *          type: string
 *          description: descripcion de la falla o problema que tiene.
 *        idTicketManager:
 *          type: number
 *          description: _id del responsable asignado a esta tarea.
 *        ticketDate:
 *          type: string
 *          description: fecha en la que se realiza el reporte
 *        timestamp:
 *          type: date
 *          description: fechas generadas por la base de datos para llegar un registro
 *      required:
 *        - subject
 *        - studen
 *        - description
 *        - idTicketManager
 *        - ticketDate
 *      example:
 *        id: 61563c1538b53b7dcc4927a0
 *        subject: "No puedo iniciar sesion"
 *        studen: "Juan Perex"
 *        description: "Desde el jueves no puede entrar a la pagina por que no recuerda su contraseña"
 *        idTaskManager: 358
 *        ticketDate: 29/09/2021
 *
 *    TicketNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro la tarea
 *      example:
 *        msg: No se encontro el ticket
 *
 *  parameters:
 *    ticketsId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: el ticket id
 */

/**
 * @swagger
 * tasgs:
 *  name: Tickets
 *  description: Endpoint para realizar operaciones sobre las tareas
 */

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Crea un ticket en el sistema.
 *    tags: [Tickets]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tickets'
 *    responses:
 *      200:
 *        description: El ticket fue creado exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tickets'
 *      500:
 *        description: Algo fallo en el servidor
 *
 */
router.post('/', createTicket);

/**
 * @swagger
 * /tickets:
 *  get:
 *   summary: Obtienes todas los tickets en formato JSON
 *   tags: [Tickets]
 *   responses:
 *     200:
 *        description: lista de tareas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Tickets'
 *
 */
router.get('/', getAllTickets);

/**
 * @swagger
 * /tickets/{id}:
 *  get:
 *    summary: Obtienes un ticket por su ID en formato JSON
 *    tags: [Tickets]
 *    parameters:
 *      - $ref: '#/components/parameters/ticketsId'
 *    responses:
 *      200:
 *        description: El ticket se encontro
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Tickets'
 *      404:
 *        description: El ticket no exite
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TicketNotFound'
 */
router.get('/:id', getTicket);

/**
 * @swagger
 * /tickets/{id}:
 *  put:
 *    summary: Actualizas un ticket por su ID y lo regresa en formato JSON
 *    tags: [Tickets]
 *    parameters:
 *      - $ref: '#/components/parameters/ticketsId'
 *    responses:
 *      200:
 *        description: El ticket se actualizo correctamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Tickets'
 *      404:
 *        description: El ticket no se actualizo correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TicketNotFound'
 */
router.put('/:id', updateTicketById);

/**
 * @swagger
 * /tickets/delete/{id}:
 *  put:
 *    summary: Elimina un ticket por su ID
 *    tags: [Tickets]
 *    parameters:
 *      - $ref: '#/components/parameters/ticketsId'
 *    responses:
 *      200:
 *        description: El ticket se elimino correctamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Tickets'
 *      404:
 *        description: El ticket no se elimino correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TicketNotFound'
 */
router.put('/delete/:id', deleteTicketById);

module.exports = router;
