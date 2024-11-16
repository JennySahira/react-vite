import React, { useState, useEffect } from 'react';
import HelpDesk from './HelpDesk';
import Accordion from './Accordion';
import SubscribeForm from './SubscribeForm';
import './SubscribeSection.css';
import './Footer';
import Footer from './Footer';

function SubscribePage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'darkMode' : 'lightMode');
  }, [isDarkMode]);

  return (
    <div className="subscribe-background">
      <div className="form-wrapper">
        <div className="contact-text">
          <h1 className="questions">Any questions?<br />Check out the FAQs</h1>
          <p className="get-in-touch">Still have unanswered questions and need to get in touch?</p>
          <HelpDesk />
        </div>
        <Accordion isDarkMode={isDarkMode} />
      </div>
      <SubscribeForm />
      <Footer />
    </div>
  );
}

export default SubscribePage;
