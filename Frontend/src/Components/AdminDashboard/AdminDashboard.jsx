import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);

    // Fetch users from backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/userInfo');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Fetch books from backend
    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    // Load users and books when the component mounts
    useEffect(() => {
        fetchUsers();
        fetchBooks();
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/admin-dashboard/manage-user">Manage User</Link></li>
                    <li><Link to="/admin-dashboard/manage-book">Manage Book</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <h2>Admin Dashboard</h2>
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Users</h3>
                        <p>{users.length}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Books</h3>
                        <p>{books.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;