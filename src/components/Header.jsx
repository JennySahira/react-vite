import React, { useState, useEffect } from 'react';
import '../components/Header.css';
import Breadcrumb from '../components/Breadcrumb';
import Hero from './Hero';
import '../App.css';
import NavBar from './NavBar';
import './Header.css';



function Header(){

// Definiera isDarkMode med useState
const [isDarkMode, setIsDarkMode] = useState(() => {
  // Läs inlägget från localStorage när komponenten laddas
  return localStorage.getItem('darkMode') === 'true';
});

useEffect(() => {
  // Ställ in rätt tema när komponenten laddas baserat på localStorage
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'darkMode' : 'lightMode');
}, [isDarkMode]);

const handleToggle = () => {
  setIsDarkMode(!isDarkMode);
  localStorage.setItem('darkMode', !isDarkMode); // Spara tillståndet i localStorage
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
