import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Asiacontact.css';


const Asiacontact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>If you have any questions or inquiries, feel free to get in touch with us:</p>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>asianalifestyl@gmail.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+1234567890</span>
            </li>
            {/* Add more contact details as needed */}
          </ul>
          <div className="contact-extra">
            <p>Follow us on social media for updates:</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-image">
        
        </div>
      </div>
    </div>
  );
};

export default Asiacontact;
