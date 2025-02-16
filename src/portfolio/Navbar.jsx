import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="logo">
        SHAMIM <span>AHMAD</span>
      </a>
      <i 
        className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} 
        id="menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#education">Skill's</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
