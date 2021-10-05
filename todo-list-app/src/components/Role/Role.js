import React from 'react';
import './Role.css';

const Role = () => {
  const role = 'Moderator';
  return (
    <div className="Role">
      <div className="Role-container">
        <div className="Role-content">
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Role;
