import React from 'react';
import './Features.css';
import cardImage from '../assets/Features/card.svg'; 
import statisticsImage from '../assets/Features/statistics.svg';
import walletImage from '../assets/Features/wallet.svg';
import securityImage from '../assets/Features/security.svg';
import supportImage from '../assets/Features/support.svg';
import smileyImage from '../assets/Features/smiley.svg';
import iphone2 from '../assets/Features/iphone.svg';

function Features() {
  return (
    <div className='features'>
    <section id="target-section" className="features-wrapper">
      {/* Hero Image */}
      <div className="featuresIphone">
        <img src={iphone2} alt="iPhone showing the app" />
      </div>

      {/* Headline and USP section */}
      <div>
        {/* Headline */}
        <div className="headline">
        <h1>App Features</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam<br /> luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        {/* USP Container */}
        <div className="usp-container">
          {/* USP Items */}
          <div className="usp-item">
            <div className="usp-icon">
              <img src={cardImage} alt="Icon representing easy payments" />
            </div>
            <div className="usp-content">
              <h2>Easy Payments</h2>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>
          {/* Repeat USP items for each feature */}
          <div className="usp-item">
            <div className="usp-icon">
              <img src={statisticsImage} alt="Icon representing cost statistics" />
            </div>
            <div className="usp-content">
              <h2>Cost Statistics</h2>
              <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
          </div>
          <div className="usp-item">
            <div className="usp-icon">
              <img src={walletImage} alt="Icon representing cashback" />
            </div>
            <div className="usp-content">
              <h2>Regular Cashback</h2>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
          </div>
          <div className="usp-item">
            <div className="usp-icon">
              <img src={securityImage} alt="Icon representing data security" />
            </div>
            <div className="usp-content">
              <h2>Data Security</h2>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
          </div>
          <div className="usp-item">
            <div className="usp-icon">
              <img src={supportImage} alt="Icon representing 24/7 support" />
            </div>
            <div className="usp-content">
              <h2>Support 24/7</h2>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
          </div>
          <div className="usp-item">
            <div className="usp-icon">
              <img src={smileyImage} alt="Icon representing top standards" />
            </div>
            <div className="usp-content">
              <h2>Top Standards</h2>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Features;
