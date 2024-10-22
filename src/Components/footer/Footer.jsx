import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Address and Contact Section */}
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p><strong>Address:</strong> 123 Beach Road, Santorini Villa, Talalla, Sri Lanka</p>
                    <p><strong>Phone:</strong> +94 123 456 789</p>
                    <p><strong>Email:</strong> info@santorinivilla.com</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/booking">Booking</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('src/assets/icons/facebook.png')} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('src/assets/icons/instagram.png')} alt="Instagram" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={require('src/assets/icons/twitter.png')} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2024 Santorini Villa. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer