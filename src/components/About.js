import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About Little Explorer</h1>
            </header>
            <section className="about-content">
                <div className="about-description">
                    <p>
                        Welcome to Little Explorer! Our interactive platform is designed to inspire a love for reading and learning in children of all ages. With a wide range of storybooks and educational materials, we aim to make learning fun and engaging.
                    </p>
                    <p>
                        At Little Explorer, we believe in the power of stories to educate and entertain. Our collection includes stories from various genres, cultures, and languages, ensuring that every child finds something they love.
                    </p>
                </div>
                <div className="about-categories">
                    <h2>Books by Age Categories</h2>
                    <p>
                        Finding the right book for your child's age group is easy with our categorized collections. Whether you are looking for books for toddlers, preschoolers, or older children, we have something for everyone.
                    </p>
                    <ul>
                        <li>0-3 Years: Picture Books and Simple Stories</li>
                        <li>4-6 Years: Early Readers and Short Stories</li>
                        <li>7-9 Years: Chapter Books and Interactive Stories</li>
                        <li>10-12 Years: Advanced Readers and Educational Materials</li>
                    </ul>
                </div>
                <div className="about-videos">
                    <h2>Story Videos</h2>
                    <p>
                        Enhance your child's reading experience with our story videos. Each video is carefully crafted to bring the story to life, combining narration, animation, and music to create an immersive experience.
                    </p>
                </div>
                <div className="about-contact">
                    <h2>Contact Us</h2>
                    <p>
                        We love to hear from our readers! If you have any questions, suggestions, or feedback, please get in touch with us.
                    </p>
                    <p>Email: contact@littleexplorer.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </section>
        </div>
    );
};

export default About;
