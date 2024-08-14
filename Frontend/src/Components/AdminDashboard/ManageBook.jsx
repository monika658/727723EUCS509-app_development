import React, { useState, useEffect } from 'react';
import "./Manage.css";

const ManageBook = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', coverImage: '', pdf: '', category: '' });

    // Fetch books from backend
    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/books');
            const data = await response.json();
            console.log('Fetched books data:', data); // Log the data for debugging
            setBooks(Array.isArray(data) ? data : data.books || []);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    
    // Load books when the component mounts
    useEffect(() => {
        fetchBooks();
    }, []);

    // Delete book from backend
    const handleDeleteBook = async (bookId) => {
        try {
            await fetch(`http://localhost:8080/books/${bookId}`, { method: 'DELETE' });
            fetchBooks(); 
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    // Add a new book to the backend
    const handleAddBook = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });

            if (response.ok) {
                fetchBooks(); // Re-fetch books after adding a new book
                setNewBook({ title: '', coverImage: '', pdf: '', category: '' });
                alert('Book added successfully');
            } else {
                alert('Failed to add book');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book');
        }
    };

    return (
        <div className="manage-section">
            <h2>Manage Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.category}</td>
                            <td>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Add New Book</h3>
            <form onSubmit={handleAddBook} className="add-book-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Cover Image URL"
                    value={newBook.coverImage}
                    onChange={(e) => setNewBook({ ...newBook, coverImage: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="PDF URL"
                    value={newBook.pdf}
                    onChange={(e) => setNewBook({ ...newBook, pdf: e.target.value })}
                    required
                />
                <select
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Fairy Tale">Fairy Tale</option>
                    <option value="AGE 3-6">AGE 3-6</option>
                    <option value="AGE 7-10">AGE 7-10</option>
                    <option value="ABOVE 10">ABOVE 10</option>
                </select>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default ManageBook;