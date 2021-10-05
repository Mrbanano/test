import React from 'react';
import './TicketForm.css';
import SelectMod from '../selectRole/SelectRole';

const TicketForm = () => {
  return (
    <div className="TicketForm">
      <div className="TicketForm-container">
        <div className="TicketForm-content">
          <form class="form" action="">
            <div class="mb-3 pt-0">
              <input type="text" placeholder="Asunto" className="input" />
            </div>

            <div class="mb-3 pt-0">
              <input type="text" placeholder="Estudiante" className="input" />
            </div>

            <div class="pt-0">
              <textarea
                type="text"
                placeholder="Descripción"
                className="input"
              />
            </div>

            <div className="pt-0 date">
              <input
                type="date"
                className="date input"
                id="fecha"
                name="fecha"
              />
            </div>
            <div className="mb-3 pt-0">
              <SelectMod />
            </div>

            <div class="pt-0">
              <button class="btn-agregar">Agregar Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
