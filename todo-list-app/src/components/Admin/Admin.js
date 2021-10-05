import React, { useState } from 'react';
import './Admin.css';
import Profile from '../Profile';
import UserForm from '../UserForm';
import Subtitle from '../Subtitle';

const Admin = () => {
  const [showFormTickets, setShowFormTickets] = useState(true);
  const [users, setusers] = useState([]);

  return (
    <div className="Admin">
      <div className="Admin-container">
        <div className="Admin-content">
          <Profile
            setShowFormTickets={setShowFormTickets}
            showFormTickets={showFormTickets}
          />
          {showFormTickets === true && <UserForm />}
          <Subtitle subtitle={'Usuarios'} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
