import React from 'react';
import './HelpDesk.css';
import phoneIcon from '../assets/HelpDesk/telephone.svg';
import chatIcon from '../assets/HelpDesk/chat.svg';
import blueArrow from '../assets/HelpDesk/blue-arrow.svg';
import greenArrow from '../assets/HelpDesk/green-arrow.svg';

function HelpDesk() {
  return (
    <div className="help-desk">
      <div className="help-desk1">
        <div className="contact-phone">
          <img src={phoneIcon} className="phone" alt="telephone" />
          <p className="questions-1">Still have questions?</p>
          <button className="btn-contact blue-contact">
            Contact us
            <img src={blueArrow} className="blue-arrow" alt="blue arrow on button" />
          </button>
        </div>
      </div>
      <div className="help-desk2">
        <div className="contact-chat">
          <img src={chatIcon} className="chat" alt="chat bubble" />
          <p className="questions-2">Don't like phone calls?</p>
          <button className="btn-contact green-contact">
            Contact us
            <img src={greenArrow} className="green-arrow" alt="green arrow on button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
