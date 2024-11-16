import React from 'react';
import './MapSection.css';
import pinIcon from '../assets/contact/pin.svg';
import phoneIcon from '../assets/contact/phone.svg';
import clockIcon from '../assets/contact/clock.svg';

function MapSection() {
  return (
    <div className="map">
      <div id="googleMap"></div>
      <section className="medcenter">
      <div className="medcenter1">
        <h4 className="m1">Medical Center 1</h4>
        <p className="address"><img src={pinIcon} className="pin" alt="Pin Icon" />4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p className="nr"><img src={phoneIcon} className="phone-call" alt="Phone Icon" />(406) 555-0120</p>
        <p className="openhr"><img src={clockIcon} className="clock" alt="Clock Icon" />Mon – Fri: 9:00 am – 22:00 am </p><p className="sat-sun">Sat – Sun: 9:00 am – 20:00 am</p>
      </div>
      <div className="medcenter2">
        <h4 className="m2">Medical Center 2</h4>
        <p className="address"><img src={pinIcon} className="pin" alt="Pin Icon" />2464 Royal Ln. Mesa, New Jersey 45463</p>
        <p className="nr"><img src={phoneIcon} className="phone-call" alt="Phone Icon" />(406) 544-0123</p>
        <p className="openhr"><img src={clockIcon} className="clock" alt="Clock Icon" />Mon – Fri: 9:00 am – 22:00 am </p><p className="sat-sun">Sat – Sun: 9:00 am – 20:00 am</p>
      </div>
      </section>
    </div>
  );
}

export default MapSection;