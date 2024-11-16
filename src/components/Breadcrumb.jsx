// src/components/Breadcrumb.jsx
import React from 'react';
import '../components/Breadcrumb.css';
import home from '../assets/Breadcrumb/home-icon.svg';
import {Link} from 'react-router-dom';

function Breadcrumb() {
  return (
    <nav className="breadcrumb">
      <a href="#" className="home-icon">
        <img src={home} alt="home-icon" />
      </a>
      <Link to='/'>Homepage</Link>
      <span>&raquo;</span>
      <Link to="/contact" className="active-contact">Contact</Link>
    </nav>
  );
}

export default Breadcrumb;
