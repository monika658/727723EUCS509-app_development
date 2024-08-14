// src/Components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { AccountCircle, Logout } from '@mui/icons-material';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [loginDropdownVisible, setLoginDropdownVisible] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!categoryDropdownVisible);
    setLoginDropdownVisible(false); // Hide login dropdown if it's open
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownVisible(!loginDropdownVisible);
    setCategoryDropdownVisible(false); // Hide category dropdown if it's open
  };

  const handleLinkClick = () => {
    setCategoryDropdownVisible(false);
    setLoginDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src="Books/Little Explorer.png" className="navbar-logo" alt="Little Explorer Logo"/>
        <h1 className="navbar-title">Little Explorer</h1>
      </div>
      <div className="navbar-links-container">
        <div className="navbar-links">
          <div className="navbar-dropdown">
            <button className="navbar-link" onClick={toggleCategoryDropdown}>
              Category
            </button>
            <div className={`dropdown-content ${categoryDropdownVisible ? 'show' : ''}`}>
              <Link to="/category/AGE 3-6" onClick={handleLinkClick}>Age 3-6</Link>
              <Link to="/category/AGE 7-10" onClick={handleLinkClick}>Age 7-10</Link>
              <Link to="/category/ABOVE 10" onClick={handleLinkClick}>Above 10</Link>
            </div>
          </div>
          <Link to="/books" className="navbar-link">Fairy Tales</Link>
         {/* <Link to="/new-arrival" className="navbar-link">New Arrival</Link>
          <Link to="/portal" className="navbar-link">Portal</Link> */}
        </div>
      </div>
      <div className="navbar-auth-links">
        <Link to="/about" className="navbar-link">About Us</Link>
        <Link to="/" className="navbar-link">Home</Link>

        {isAuthenticated ? (
          <>
            <Link to="/profile" className="navbar-link profile-link">
              <AccountCircle className="profile-icon" />
              User
            </Link>
            <button onClick={logout} className="navbar-link logout-button">
              <Logout />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link> {/* Single Login button */}
            <Link to="/signup" className="navbar-link">Signup</Link> {/* Signup button */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
