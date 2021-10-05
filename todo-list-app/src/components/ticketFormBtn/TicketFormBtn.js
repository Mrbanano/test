import React from 'react';
import './TicketFormBtn.css';

const TicketFormBtn = ({ setShowFormTickets, showFormTickets }) => {
  const handleShowForm = () => {
    setShowFormTickets(!showFormTickets);
  };

  return (
    <div className="TicketFormBtn">
      <div className="TicketFormBtn-container">
        <div className="TicketFormBtn-content">
          <button
            onClick={handleShowForm}
            className={showFormTickets ? 'selected' : ''}
          >
            <img src="/btnAdd.png" alt="boton-de-agregar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketFormBtn;
