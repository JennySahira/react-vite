import React, { useState, useEffect } from 'react';
import '../components/Header.css';
import Breadcrumb from '../components/Breadcrumb';
import Hero from './Hero';
import '../App.css';
import NavBar from './NavBar';
import './Header.css';



function Header(){

// DarkMode skapat med hjälp av ChatGpt
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
        <div className="header-background">
        <div className="header-container">
        <NavBar />
        <Breadcrumb />
        <Hero isDarkMode={isDarkMode} />
      </div>
      </div>
    
  );
}

export default Header;
