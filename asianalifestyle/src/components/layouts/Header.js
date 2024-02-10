import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"; // Import CSS file for custom styles
import { useAuth } from "../../context/Auth";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          🛍️ AsianaLifestyle
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="nav-link" activeClassName="active">
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link" activeClassName="active">
              Register
            </NavLink>
          </li>
          {!auth?.user ? (
                <>
                
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
        </ul>
        <div className="cart-icon">
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
