import React, { useState } from "react";
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Navigation bar */}
      <div className="header__nav-bar">
        <div className="header__logo">
          <h1>Untitled UI</h1>
        </div>
        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="header__hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Hero Text */}
      <div className="header__hero">
        <h2>Beautiful analytics to grow smarter</h2>
      </div>

      {/* Demo and Sign Up buttons */}
      <div className="header__cta">
        <button className="btn btn--demo">Demo</button>
        <button className="btn btn--signup">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
