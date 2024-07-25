// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Newsletter />
      <Footer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="Main-content">
      <div className="sections">
        <section className="section-item" id="personalized-book">
          <h2>Personalized Book</h2>
          <p>Find books tailored to your taste.</p>
        </section>
        <section className="section-item" id="free-book">
          <h2>Free Book</h2>
          <p>Discover books available for free.</p>
        </section>
        <section className="section-item" id="must-try-books">
          <h2>Must Try Books</h2>
          <p>Check out these highly recommended books.</p>
        </section>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="Newsletter">
      <h2>Newsletter</h2>
      <p>Subscribe to our newsletter to receive free books every week.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default App;
