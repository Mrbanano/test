const createTicket = (req, res, next) => {
  try {
    res.send('tickets');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getAllTickets = (req, res, next) => {
  try {
    res.send('tickets');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const getTicket = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const deleteTicketById = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
    next();
  }
};

const updateTicketById = (req, res, next) => {
  try {
    res.send('a ticket');
  } catch (error) {
    console.log(new Error(error));
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicket,
  deleteTicketById,
  updateTicketById,
};
