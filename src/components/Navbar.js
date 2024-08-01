import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Navbar.css';
import ProfileIcon from './ProfileIcon';  // Ensure ProfileIcon is correctly imported

const Navbar = () => {
  const { isAuthenticated, username, logout } = useContext(AuthContext);  // Use AuthContext to get authentication status and username
  const [loginDropdownVisible, setLoginDropdownVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginDropdownVisible(!loginDropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src="images/Little Explorer.png" className="navbar-logo" alt="Little Explorer Logo" />
        <h1 className="navbar-title">Little Explorer</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/books" className="navbar-link">Books</Link>
        <div className="navbar-dropdown">
          <button className="navbar-link">Category</button>
          <div className="dropdown-content">
            <Link to="/category/age-3-5">Age 3-5</Link>
            <Link to="/category/age-6-8">Age 6-8</Link>
            <Link to="/category/age-9-12">Age 9-12</Link>
          </div>
        </div>
        <Link to="/about" className="navbar-link">About Us</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="navbar-link">
              <ProfileIcon username={username} />  {/* Display ProfileIcon with username */}
            </Link>
            <button className="navbar-link" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="navbar-dropdown">
              <button className="navbar-link" onClick={handleLoginClick}>Login</button>
              {loginDropdownVisible && (
                <div className="dropdown-content">
                  <Link to="/admin-login">Admin Login</Link>
                  <Link to="/login">User Login</Link>
                </div>
              )}
            </div>
            <Link to="/signup" className="navbar-link">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
