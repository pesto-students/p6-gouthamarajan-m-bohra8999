import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <a href='/'>
            <h1>Shortly</h1>
          </a>
        </div>
        <div className='navbar-links links'>
          <a href='#feature'>Feature</a>
          <a href='#pricing'>Pricing</a>
          <a href='#resource'>Resource</a>
        </div>
        <div className='navbar-auth links'>
          <a href='#login'>Login</a>
          <a href='#signup'>Signup</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
