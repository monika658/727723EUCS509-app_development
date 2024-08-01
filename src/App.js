import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import Book from './components/Book';
import Category from './components/Category';
import About from './components/About';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/admin-login'].includes(location.pathname);

  return (
    <div>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/books" element={<Book />} />
        <Route path="/category/:age" element={<Category />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;
