// Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-section">
        <h3>HELP?</h3>
        <ul>
          <li><a href="#why-choose-us">Why Choose Us</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#photoadvice">Photo Advice</a></li>
          <li><a href="#delivery">Delivery</a></li>
          <li><a href="#change-order-refund-policy">Change Order/Refund Policy</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>USEFUL LINKS</h3>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#terms-and-conditions">Terms and Conditions</a></li>
          <li><a href="#cookies-policy">Cookies Policy</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACT US</h3>
        <ul>
          <li>Phone: +919848300663</li>
          <li>Address: 112 Bramshill Close, Coimbatore, India</li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com" className="fab fa-facebook-f"></a>
        <a href="https://www.twitter.com" className="fab fa-twitter"></a>
        <a href="https://www.pinterest.com" className="fab fa-pinterest"></a>
        <a href="https://www.instagram.com" className="fab fa-instagram"></a>
        <a href="https://www.youtube.com" className="fab fa-youtube"></a>
      </div>
    </footer>
  );
}

export default Footer;
