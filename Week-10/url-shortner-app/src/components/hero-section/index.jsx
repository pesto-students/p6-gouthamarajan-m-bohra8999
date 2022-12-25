import React from 'react';
import './HeroSection.css';
import image from '../../assets/images/hero-section.png';

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero__heading'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
      </div>
      <div className='hero__image'>
        <img src={image} alt='background'></img>
      </div>
    </section>
  );
};

export default HeroSection;
