import React from 'react';
import Ticket from '../Ticket';

const TicketsContainer = ({ tickets }) => {
  return (
    <div className="Tickets">
      <div className="Tickets-container">
        <div className="Tickets-content">
          {tickets.map((ticket) => (
            <Ticket key={('Ticket-', ticket._id)} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketsContainer;
