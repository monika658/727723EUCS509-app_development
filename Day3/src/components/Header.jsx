// Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css'; // Assuming you have specific styles for Header

function Header() {
  return (
    <header className="App-header">
      <nav className="nav-container">
        <div className="nav-left">
          <img src="C:\\Users\\USER\\Downloads\\White And Black Modern Abstract Beauty Logo.png" className="logo" alt="Company Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#personalized-book">Personalized Book</a></li>
          <li><a href="#free-book">Free Book</a></li>
          <li><a href="#must-try-books">Must Try Books</a></li>
        </ul>
        <div className="nav-actions">
          <button className="login-button">Login</button>
          <button className="cart-button"><i className="fas fa-shopping-cart"></i></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
