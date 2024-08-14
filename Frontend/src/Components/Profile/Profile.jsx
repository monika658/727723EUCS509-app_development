import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { isAuthenticated, user, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
  });
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetch(`http://localhost:8080/api/profile/${user.email}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Profile not found');
          }
          return response.json();
        })
        .then(data => {
          setFormData(data);
          setProfileUpdated(true);
          localStorage.setItem('profile', JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error fetching profile data:', error);
          setProfileUpdated(false);
        });
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: profileUpdated ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const url = profileUpdated
      ? `http://localhost:8080/api/profile/update/${formData.id}`
      : 'http://localhost:8080/api/profile/create';

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save profile');
        }
        return response.json();
      })
      .then(data => {
        setFormData(data);
        setProfileUpdated(true);
        setEditMode(false);
        localStorage.setItem('profile', JSON.stringify(data));
        updateUserProfile(data); // Update profile in AuthContext
      })
      .catch(error => console.error('Error saving profile data:', error));
  };

  if (!isAuthenticated) {
    return <div>You need to be logged in to view this page.</div>;
  }

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-header-left">
          <div className="profile-picture">
            <img src="Books/profile-icon-design-free-vector.jpg" alt="Profile" />
            <button
              className="edit-profile-btn"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>
        <div className="profile-header-right">
          <h1>{user.username}</h1>
          {profileUpdated && !editMode ? (
            <div className="profile-info">
              <p><strong>First Name:</strong> {formData.firstName}</p>
              <p><strong>Last Name:</strong> {formData.lastName}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Save</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
