import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="form">
      <h2>Get Online Consultation</h2>
      <form>
        <label htmlFor="full-name">Full name</label>
        <input type="text" className="specialist-name" id="full-name" name="full-name" />

        <label htmlFor="email">Email address</label>
        <input type="email" className="specialist-email" id="email" name="email" />

        <label htmlFor="specialist">Specialist</label>
        <div className="custom-select">
          <select id="specialist" name="specialist">
            <option value=""></option>
            <option value="Joakim">Joakim</option>
            <option value="Therese">Therese</option>
            <option value="Hans">Hans</option>
          </select>
        </div>
        <input type="submit" className="specialist-submit" value="Make an appointment" />
      </form>
    </div>
  );
}

export default ContactForm;
