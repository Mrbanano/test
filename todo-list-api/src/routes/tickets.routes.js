var express = require('express');
var router = express.Router();

const {
  getAllTickets,
  getTicket,
  createTicket,
  updateTicketById,
  deleteTicketById,
} = require('../controllers/tickets.controller');

/* GET users listing. */
router.get('/', getAllTickets);

/* POST  user in listing. */
router.post('/', createTicket);

/* GET  a user */
router.get('/:id', getTicket);

/*UDPATE a  user  in listing. */
router.put('/:id', updateTicketById);
/* DELETE a user  in listing. */
router.delete('/:id', deleteTicketById);

module.exports = router;
