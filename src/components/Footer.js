import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-overlay"></div>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Address: 123 Storybook Lane</p>
                    <p>Email: info@littleexplorer.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Get in Touch</h4>
                    <p>For any inquiries, please reach out to us via the contact information provided.</p>
                </div>
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Little Explorer is an interactive children's storybook and education portal.</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
