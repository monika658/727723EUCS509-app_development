import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [isFirstImage, setIsFirstImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFirstImage(prevIsFirstImage => !prevIsFirstImage);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <h2>Little Explorer</h2>
            <p>Interactive children's storybook and education portal.</p>
            <div className="toggle-container">
                <img 
                    src={isFirstImage ? "/images/Empower-Your-Childs-Imagination.png.webp" : "/images/Discover-the-Magic-of-Reading.png.webp"} 
                    alt="Welcome" 
                    className="toggle-image"
                />
            </div>
            <div className="books-section">
                <h3>5 mins Books</h3>
                <div className="books-grid">
                    <div className="book">
                        <img src="images/monkey.jpg" alt="The Clever Fox" />
                        <p>The Clever Monkey</p>
                    </div>
                    <div className="book">
                        <img src="images/wood.webp" alt="The Clever Fox" />
                        <p>An Honest Woodcutter</p>
                    </div>
                    <div className="book">
                        <img src="images/frnd.jpg" alt="Two Cat & The Monkey" />
                        <p>Bear & Two Boys </p>
                    </div>
                    <div className="book">
                        <img src="images/ant.jpg" alt="Star Rhymes" />
                        <p>Ant & Grasshopper</p>
                    </div>
                    <div className="book">
                        <img src="images\16168335.jpg" alt="Star Rhymes" />
                        <p>Lion & Mouse</p>
                    </div>
                    <div className="book">
                        <img src="images\bdaf4e8a46c6d05136316b3ba59208bd.jpg" alt="Star Rhymes" />
                        <p>Fox & Crow</p>
                    </div>
                    <div className="book">
                        <img src="images\rabbit.jpg" alt="Star Rhymes" />
                        <p>Hare & Tortoise</p>
                    </div>
                    <div className="book">
                        <img src="images\duck.jpg" alt="Star Rhymes" />
                        <p>Ugly Duckling</p>
                    </div>
                    <div className="book">
                        <img src="images\The-Thirsty-Crow-Story-For-Kids_lr.jpg" alt="Star Rhymes" />
                        <p>Thirsty Crow</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
