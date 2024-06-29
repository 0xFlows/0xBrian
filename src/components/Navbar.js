import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navlogo">0xBrian</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mint">Mint</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/perspectives">Perspectives</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button id="connectWallet">Connect Wallet</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
