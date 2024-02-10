import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Set redirecting state to true
    setRedirecting(true);

    // Redirect to login page after 3 seconds
    const timeout = setTimeout(() => {
      navigate('/login'); // Change '/login' to your login page route
    }, 3000);

    // Clear the timeout if component unmounts or if redirected before 3 seconds
    return () => clearTimeout(timeout);
  }, [navigate]);

  return redirecting ? (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : null;
};

export default Spinner;
