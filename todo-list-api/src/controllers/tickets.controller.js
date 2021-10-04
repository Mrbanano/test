const Ticket = require('../models/Tickets');

const createTicket = async (req, res, next) => {
  const { idTicketManager } = req.body;

  const ticket = new Ticket(req.body);
  try {
    const ticketActive = await Ticket.find({
      Delete: false,
      idTicketManager: idTicketManager,
    });
    if (ticketActive.length < 5) {
      const result = await ticket.save();
      res.send(result);
    } else {
      res.send({ message: `el usuario ya tiene 5 tareas asignadas` });
    }
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getAllTickets = async (req, res, next) => {
  try {
    const result = await Ticket.find({ Delete: false });
    res.status(200).send(result);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getTicket = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Ticket.findById(id);
    res.json(result);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const deleteTicketById = async (req, res, next) => {
  const id = req.params.id;
  const { Delete } = req.body;
  try {
    res.send(Delete);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const updateTicketById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).send(ticket);
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicket,
  deleteTicketById,
  updateTicketById,
};
