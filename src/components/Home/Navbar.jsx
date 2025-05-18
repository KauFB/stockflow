import React from 'react';
import '../../styles/home-components/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">STOCKFLOW</div>
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/sistema">Sistema</Link>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
      
    </header>
  );
};

export default Navbar;
