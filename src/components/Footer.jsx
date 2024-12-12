import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <ul>
          <li><a href="#">Product</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Social</a></li>
          <li><a href="#">Legal</a></li>
        </ul>
      </div>
      <div className="footer__legal">
        <p>&copy; 2027 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
