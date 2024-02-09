import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Pagenotfound.css';

const Pagenotfound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">Oops! Page Not Found</h1>
        <p className="not-found-text">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="go-back-button">Go Back </Link> {/* Go Back button */}
      </div>
    </div>
  );
};

export default Pagenotfound;
