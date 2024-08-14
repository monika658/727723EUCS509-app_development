import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="testimonials">
                <blockquote>
                    <p>"Little Explorer has been an amazing resource for my child's growth!"</p>
                </blockquote>
                <p>- Happy Parent</p>
                <blockquote>
                    <p>"A wonderful world of stories that captivate and educate."</p>
                </blockquote>
                <p>- Enthusiastic Teacher</p>
                <blockquote>
                    <p>"My kids can't wait to explore more every day!"</p>
                </blockquote>
                <p>- Proud Parent</p>
            </div>
            <div className="home-content">
                <h1 className="typewriter">Welcome to Little Explorer</h1>
            </div>
        </div>
    );
};

export default Home;
