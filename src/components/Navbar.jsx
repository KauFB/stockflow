import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">STOCKFLOW</div>
      <nav className="navbar-links">
        <a href="#">Início</a>
        <a href="#">Sistema</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
