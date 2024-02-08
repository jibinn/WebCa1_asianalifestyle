import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="footer-contact-item">
          <FaPhone className="footer-icon" />
          <span>+1234567890</span>
        </div>
        <div className="footer-contact-item">
          <FaEnvelope className="footer-icon" />
          <span>asianalifestyl@gmail.com</span>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
