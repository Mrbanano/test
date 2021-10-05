import React from 'react';
import './Profile.css';
import Avatar from '../Avatar';
import Information from '../Information';
import TicketFormBtn from '../ticketFormBtn';

const Profile = ({ setShowFormTickets, showFormTickets }) => {
  return (
    <div className="Profile">
      <div className="Profile-container">
        <div className="Profile-content">
          <div className="Profile-info">
            <Avatar />
            <Information />
          </div>
          <TicketFormBtn
            setShowFormTickets={setShowFormTickets}
            showFormTickets={showFormTickets}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
