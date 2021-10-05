import React from 'react';
import './TicketsClean.css'

const TicketsClean = () => {
  return (
    <div className="TicketsClean">
      <div className="TicketsClean-containet">
        <div className="Tickets-content">
          <img src="/ticketsClean.png" alt="No tienes tickets" />
          <p>No tienes tickets asignados</p>
        </div>
      </div>
    </div>
  );
};

export default TicketsClean;
