import React from 'react';
import Logo from '../Logo';
import Hero from '../Hero';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-content">
          <Logo />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
