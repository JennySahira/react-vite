import React from 'react';
import './LearnMore.css';
import top from '../assets/LearnMore/top-image.svg';
import bottom from '../assets/LearnMore/bottom-image.svg';
import wallet from '../assets/LearnMore/wallet.svg';
import creditcard from '../assets/LearnMore/creditcard.svg';
import vector from '../assets/LearnMore/Vector.svg';

function LearnMore() {
    return (
      <div className="learnmore-background">
        <div className="learnmore">
          <div className="top-text">
            <h2 className="h2-top">Make your money transfer simple and clear</h2>
            <div className="checklist">
              <ul className="checklist">
                <li>Banking transactions are free for you</li>
                <li>No monthly cash commission</li>
                <li>Manage payments and transactions online</li>
              </ul>
            </div>
            <button
              className="learn-more learn-more1"
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            >
              Learn more
              <img src={vector} alt="arrow on button" />
            </button>
          </div>
          
          <div className="top-image">
            <img src={top} alt="transaction forecast" />
          </div>
  
          <div className="bottom-image">
            <img src={bottom} alt="transaction contacts" />
          </div>
  
          <div className="bottom-card">
            <div className="bottom-text">
              <h2 className="h2-bottom">
                Receive payment from <br />
                international bank details
              </h2>
              <img src={wallet} alt="wallet" className="wallet2" />
              <img src={creditcard} alt="creditcard" className="creditcard" />
              <p className="text1">
                Manage your payments online. Mollis congue egestas egestas fermentum fames.
              </p>
              <p className="text2">
                A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
              </p>
              <button
                className="learn-more learn-more2"
                onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              >
                Learn more
                <img src={vector} alt="arrow on button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LearnMore;
  