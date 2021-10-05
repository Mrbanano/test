import React from 'react';
import './Subtitle.css';

const Subtitle = ({ subtitle }) => {
  return (
    <div className="Subtitle">
      <div className="Subtitle-container">
        <div className="Subtitle-content">
          <p>Tus {subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
