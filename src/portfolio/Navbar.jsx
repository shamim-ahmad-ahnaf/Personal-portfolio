import React from 'react'

export default function Navbar() {
  return (
    <div>
         <header class="header">
        <a href="#" class="logo">SHAMIM <span>AHMAD</span></a>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#education">Skill's</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    </div>
  )
}
