import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Logo from './components/Logo';
import Features from './components/Features';
import Carousel from './components/Carousel';
import LearnMore from './components/LearnMore';
import Testimonials from './components/Testimonials';
import SubscribeSection from './components/SubscribeSection';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      
      <Routes>
  <Route 
    path="/" 
    element={
      <>
        <Header />
        <Logo />
        <Features />
        <Carousel />
        <LearnMore />
        <Testimonials />
        <SubscribeSection />
      </>
    }
  />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </div>
  );
}

export default App;
