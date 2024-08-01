// src/components/ProfileIcon.js
import React from 'react';
import './ProfileIcon.css';  // Ensure this path is correct

const ProfileIcon = ({ username }) => {
  return (
    <div className="profile-icon">
      {/* Add a profile icon, e.g., an SVG or FontAwesome icon */}
      <i className="fas fa-user"></i>  {/* Example using FontAwesome */}
      <span>{username}</span>  {/* Display username */}
    </div>
  );
};

export default ProfileIcon;
