// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import './Login.css';

// Hard-coded credentials for user and admin
const USER_CREDENTIALS = {
  username: 'user123',
  password: 'userpassword'
};

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAdmin) {
      // Check for admin credentials
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        navigate('/admin-dashboard');
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      // Check for user credentials
      try {
        const response = await axios.get('http://localhost:5000/users');
        const users = response.data;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
          login(user);
          navigate('/');
        } else {
          alert('Invalid user credentials');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isAdmin ? 'ADMIN LOGIN' : 'USER LOGIN'}</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          Admin Login
        </label>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
