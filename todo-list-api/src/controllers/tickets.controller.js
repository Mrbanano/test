const Ticket = require('../models/Tickets');
const User = require('../models/Users');

const createTicket = async (req, res, next) => {
  const { subject, studen, description, idTicketManager, ticketDate } =
    req.body;

  const ticket = new Ticket({
    subject,
    studen,
    description,
    idTicketManager,
    ticketDate,
    Delete: false,
  });

  try {
    const mod = await User.findById(idTicketManager);

    if (!mod) return res.status(406).send({ message: `the ticket not saved` });

    const ticketActive = await Ticket.find({
      Delete: false,
      idTicketManager: idTicketManager,
    });

    if (ticketActive.length < 5) {
      const result = await ticket.save();
      const tickets = mod.tickets;
      tickets.push(result._id);
      const addTicket = await User.findByIdAndUpdate(
        { _id: mod._id },
        { tickets },
        {
          new: true,
        }
      );
      res.send(addTicket);
    } else {
      res.status(406).send({ message: `the user haver 5 tickets` });
    }
  } catch (error) {
    console.log(new Error(error));
    next();
    return res.status(406).send({ message: `the ticket not saved` });
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
  try {
    const ticket = await Ticket.findOne({ _id: id });
    if (ticket.Delete === true)
      return res.status(201).send({ message: `the ticket is deleted` });

    const Delete = true;

    const ticketDelete = await Ticket.findByIdAndUpdate(
      { _id: id },
      { Delete },
      {
        new: true,
      }
    );
    res.status(201).send({ message: `the ticket was successfully deleted` });
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

const getAllfromMods = async (req, res, next) => {
  const id = req.params.managerId;
  try {
    const mod = await User.findOne(
      { _id: id, Delete: false },
      { password: 0 }
    ).populate('tickets');
    res.send(mod.tickets);
  } catch (error) {
    console.log(new Error(error));
    next();
    return res.status(406).send({ message: `no tickets for this moderatior` });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getAllfromMods,
  getTicket,
  deleteTicketById,
  updateTicketById,
};
