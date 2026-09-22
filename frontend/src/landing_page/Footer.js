import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center py-2 gap-3">
          <div className="footer-brand d-flex flex-wrap align-items-center gap-2 gap-sm-3">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
              <img
                src="/Finvest Growth Logo Lockup.png"
                alt="Finvest Growth"
                style={{ height: "28px", maxWidth: "100%", objectFit: "contain" }}
              />
            </Link>
            <span className="footer-copyright-text">
              © {new Date().getFullYear()} Finvest Growth Broking Ltd.
            </span>
          </div>

          <ul className="footer-nav-links d-flex flex-wrap align-items-center mb-0">
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/product" className="footer-link">Products</Link></li>
            <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
          </ul>

          <div className="footer-social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="Twitter / X"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-rastogi-059550308"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-icon"
              title="Instagram"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-2 mt-2 gap-2">
          <div className="footer-legal-links flex-wrap">
            <Link to="/terms" className="footer-sub-link">Terms</Link>
            <span className="separator">•</span>
            <Link to="/policy" className="footer-sub-link">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/risk-disclosure" className="footer-sub-link">Risk Disclosure</Link>
          </div>
          <span className="footer-disclaimer-short">
            Investments in securities market are subject to market risks.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;