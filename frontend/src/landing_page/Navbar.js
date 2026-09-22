import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top"
      style={{ backgroundColor: '#FFF' }}>
      <div className="container px-3 py-1">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img src="/Finvest Growth Logo Lockup.png" alt="Finvest Growth" style={{ height: "36px", maxWidth: "100%", objectFit: "contain" }} />
        </Link>
        <button 
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={closeNavbar}>Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product" onClick={closeNavbar}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={closeNavbar}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms" onClick={closeNavbar}>Terms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policy" onClick={closeNavbar}>Policy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/risk-disclosure" onClick={closeNavbar}>Risk Disclosure</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;