import React from 'react';
import './UserForm.css';
import SelectRole from '../selectRole';

const TicketForm = () => {
  return (
    <div className="TicketForm">
      <div className="TicketForm-container">
        <div className="TicketForm-content">
          <form class="form" action="">
            <div class="mb-3 pt-0">
              <input type="text" placeholder="username" className="input" />
            </div>

            <div class="mb-3 pt-0">
              <input type="password" placeholder="password" className="input" />
            </div>

            <div className="mb-3 pt-0">
              <SelectRole />
            </div>

            <div class="pt-0">
              <button class="btn-agregar">Agregar usuario</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
