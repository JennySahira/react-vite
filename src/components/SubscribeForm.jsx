import React, { useState } from 'react';
import './SubscribeForm.css';
import bellIcon from '../assets/SubscribeForm/subscribe.svg';
import mailIcon from '../assets/SubscribeForm/mail.svg';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Enkel validering av e-postformatet
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Skicka e-post till API
    fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setEmail(''); // Töm fältet efter framgångsrik post
        setError(''); // Rensa eventuella felmeddelanden
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const validateEmail = (email) => {
    // En enkel regex för att validera e-postadresser
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="subscribe">
      <img src={bellIcon} className="subscribe-image" alt="notification bell" />
      <div className="subscribe-wrapper" >
        <h2 className="subscribe-text">Subscribe to our newsletter to stay<br /> informed about the latest updates</h2>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className="subscribe-form">
          <div className="input-wrapper">
            <img src={mailIcon} className="email-icon" alt="email" />
            <input
              type="text"
              placeholder="Your Email"
              className="input-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Subscribe" className="subscribe-submit" />
          </div>
          {/* {error && <span className="error-message">{error}</span>} */}
        </div>
      </form>
    </div>
  );
}

export default SubscribeForm;
