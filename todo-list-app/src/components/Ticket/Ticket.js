import React from 'react';
import './Ticket.css';

const Ticket = ({ ticket }) => {
  const { _id, subject, studen, description, ticketDate, idTicketManager } =
    ticket;
  return (
    <div className="Ticket">
      <div className="Ticket-container">
        <div className="Ticket-content">
          <div className="Ticket-header">
            <div className="Ticket-header-info">
              <p className="subject">{subject}</p>
              <p className="text-ticket">{studen}</p>
            </div>
            <input type="checkbox" name="lista" id="lista" />
          </div>
          <div className="Ticket-body">
            <p className="text-ticket description">{description}</p>
          </div>
          <div className="Ticket-footer">
            <div className="ticketDate">
              <img src="/icon/calendario.svg" alt="calendario" />
              <p className="text-ticket">
                <strong>{ticketDate}</strong>
              </p>
            </div>
            <div className="Ticket-mangager">
              <img src="/icon/agente.svg" alt="agente" />
              <p className="text-ticket">
                <strong>{idTicketManager}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
