import React from 'react';
import './styles/Navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navlogo">0xBrian</div>
      <ul className="nav-links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./mint-page.html">Mint</a></li>
        <li><a href="./projects.html">Projects</a></li>
        <li><a href="./perspectives.html">Perspectives</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><button id="connectWallet">Connect Wallet</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
