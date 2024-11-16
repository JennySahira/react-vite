import React from 'react';
import './Hero.css';
import appstoreLight from '../assets/Hero/appstore.svg';
import appstoreDark from '../assets/Hero/appstore-darkmode.svg';
import googleplayLight from '../assets/Hero/googleplay.svg';
import googleplayDark from '../assets/Hero/googleplay-darkmode.svg';
import iphone1 from '../assets/Hero/iphone-1.svg';
import chevronDark from '../assets/Hero/chevron-down-darkmode.svg';
import chevronLight from '../assets/Hero/chevron-down.svg';

function Hero({ isDarkMode }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Manage All Your Money in One App</h1>
        <p>We offer you a new generation of mobile banking.<br />Save, spend & manage money in your pocket.</p>
        <div className="download-buttons">
          <button className="btn-appstore">
            <a href="https://www.apple.com/se/app-store/" target="_blank" rel="noopener noreferrer"></a>
              <img
                src={isDarkMode ? appstoreDark : appstoreLight}
                alt="Appstore button"
              />
          </button>
          <button className="btn-playstore">
            <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer"></a>
              <img
                src={isDarkMode ? googleplayDark : googleplayLight}
                alt="Google Play button"
              />
          </button>    
        </div>
        <div className="container">
          <a href="#target-section" className="arrow-button">
            <img src= {isDarkMode ? chevronDark : chevronLight} alt="chevron down" />
            </a>
            
          <p className="discover-more">Discover more</p>

          </div>
      </div>
      <div className="hero-image">
        <img src={iphone1} alt="App preview" />
      </div>
    </section>
  );
}

export default Hero;
