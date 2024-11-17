import React from 'react';
import Breadcrumb from './Breadcrumb';
import ContactHero from './ContactHero';
import MapSection from './MapSection';
import NavBar from './NavBar';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
    <div className="contact-background">
      <div className="contact-container">
        <NavBar />
        <Breadcrumb />
       <div className="contact-form-wrapper"><ContactHero /></div>
        </div>
        </div>
      <MapSection />
    </div>
  );
}

export default Contact;
