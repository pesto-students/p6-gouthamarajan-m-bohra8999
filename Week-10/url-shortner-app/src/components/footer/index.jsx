import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <div className='footer-section-logo'>
          <a href='/'>
            <h1>Shortly</h1>
          </a>
        </div>
        <ul className='footer-section-links'>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/careers'>Careers</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Resources</h3>
        <ul className='footer-section-links'>
          <li>
            <a href='/faq'>FAQ</a>
          </li>
          <li>
            <a href='/terms'>Terms of Service</a>
          </li>
          <li>
            <a href='/privacy'>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Social</h3>
        <ul className='footer-section-links'>
          <li>
            <a href='/twitter'>Twitter</a>
          </li>
          <li>
            <a href='/facebook'>Facebook</a>
          </li>
          <li>
            <a href='/instagram'>Instagram</a>
          </li>
          <li>
            <a href='/linkedin'>LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className='footer-copyright'>Copyright &#169; 2022 Shortly</div>
    </footer>
  );
};

export default Footer;
