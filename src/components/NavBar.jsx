import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/NavBar/logo.svg';
import icon from '../assets/NavBar/icon.svg';


function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {

    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', isDarkMode ? 'darkMode' : 'lightMode');
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode); 
  };

  return (
      <div className="navbar-container">
        <header className="topbar">
          <div className="logo-container">
            <img src={logo} className="img-1" alt="Silicon logo" />
            <p className="silicon-text">Silicon</p>
            <nav className="nav-links">
              <Link to="/">Features</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="right-section">
            <a className="dark-mode-text">Dark Mode</a>
            <label className="switch">
              <input
                type="checkbox"
                id="dark-mode"
                checked={isDarkMode}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-1"
              role="button"
            >
              <img src={icon} alt="inlog icon" className="icon-img" />
              Sign in / up
            </a>
          </div>
        </header>
      </div>
  );
}

export default NavBar;
