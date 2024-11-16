import React from 'react';
import './ContactHero.css';
import mailIcon from '../assets/Contact/mail.svg';
import peopleIcon from '../assets/Contact/people.svg';
import vectorIcon from '../assets/Contact/Vector.svg';
import ContactForm from './ContactForm';

function ContactHero() {
  return (
    <div className="contact-hero">
      <div className="contact-us">
        <h1 className="contact">Contact Us</h1>
        <div className="email">
          <img src={mailIcon} className="email-image" alt="Email Icon" />
          <h2>Email us</h2>
          <p>
            Please feel free to drop us a line. We will<br />
            respond as soon as possible.
          </p>
          <a href="contact.se" className="contact-se">
            Leave a message <img src={vectorIcon} className="vector" alt="Vector Icon" />
          </a>
        </div>
        <div className="career">
          <img src={peopleIcon} className="career-image" alt="Career Icon" />
          <h2>Careers</h2>
          <p>
            Sit ac ipsum leo lorem magna nunc mattis<br />
            maecenas non vestibulum.
          </p>
          <a href="contact.se" className="contact-se">
            Send an application <img src={vectorIcon} className="vector" alt="Vector Icon" />
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactHero;
