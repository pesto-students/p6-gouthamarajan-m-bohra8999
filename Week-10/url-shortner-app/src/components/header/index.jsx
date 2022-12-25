import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  //TODO: show menu on mobile device
  return (
    <div>
      <nav className='navbar' aria-label='main menu'>
        <div className='navbar__brand-logo'>
          <a href='/'>
            <h1>Shortly</h1>
          </a>
        </div>
        <button
          className='navbar__hamburger-icon'
          aria-label='expand main menu'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='white'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <ul className='navbar__main-links navbar--links'>
          <li>
            <a href='#feature'>Feature</a>
          </li>
          <li>
            <a href='#pricing'>Pricing</a>
          </li>
          <li>
            <a href='#resource'>Resource</a>
          </li>
        </ul>
        <ul className='navbar__auth-links navbar--links'>
          <li>
            <a href='#login'>Login</a>
          </li>
          <li>
            <a href='#signup'>Signup</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
