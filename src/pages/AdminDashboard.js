import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    imgSrc: '',
    pdfUrl: ''
  });

  useEffect(() => {
    fetchBooks();
    fetchUsers();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5001/books'); // Updated URL
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users'); // Updated URL
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/books', newBook); // Updated URL
      setBooks([...books, response.data]);
      setNewBook({ title: '', imgSrc: '', pdfUrl: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/books/${id}`); // Updated URL
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`); // Updated URL
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Manage Books</h2>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBook.imgSrc}
            onChange={(e) => setNewBook({ ...newBook, imgSrc: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="PDF URL"
            value={newBook.pdfUrl}
            onChange={(e) => setNewBook({ ...newBook, pdfUrl: e.target.value })}
            required
          />
          <button type="submit">Add Book</button>
        </form>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Manage Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
