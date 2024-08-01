import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';

// Sample data for books based on age groups
const booksData = {
  'age-3-5': [
    { image: "/images/wood.webp", title: 'Wood', author: 'Author 1' },
    { image: "/images/rabbit.jpg", title: 'Rabbit', author: 'Author 2' },
    { image: "/images/bdaf4e8a46c6d05136316b3ba59208bd.jpg", title: 'Caterpillar', author: 'Author 3' },
    { image: "/images/16168335.jpg", title: 'Lion & Rat', author: 'Author 3' },
    { image: "/images/The-Thirsty-Crow-Story-For-Kids_lr.jpg", title: 'Thirsty Crow', author: 'Author 4' },
  ],
  'age-6-8': [
    { title: 'Book 5', author: 'Author 5', image: '/images/resize.jpg' },
    { title: 'Book 6', author: 'Author 6', image: '/images/dilly.jpg' },
    { title: 'Book 7', author: 'Author 7', image: '/images/cloves.jpeg' },
    { title: 'Book 8', author: 'Author 8', image: '/images/cinderella.jpg' },
    { title: 'Book 8', author: 'Author 8', image: '/images/tangle.jpg' },
  ],
  'age-9-12': [
    { title: 'Book 9', author: 'Author 9', image: '/images/mermaid.jpg' },
    { title: 'Book 10', author: 'Author 10', image: '/images/princess.webp' },
    { title: 'Book 11', author: 'Author 11', image: '/images/snow.jpg' },
    { title: 'Book 12', author: 'Author 12', image: '/images/akbar-birbar.jpg' },
    { title: 'Book 12', author: 'Author 12', image: '/images/Hansel-and-Gretel-3-701x1024.webp' },
  ],
};

const Category = () => {
  const { age } = useParams();
  const books = booksData[age] || [];

  return (
    <div className="category-container">
      <h2>Category: Age {age.replace('age-', '').replace('-', ' to ')}</h2>
      <p>Here you can find books and educational content suitable for children aged {age.replace('age-', '').replace('-', ' to ')} years.</p>
      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
