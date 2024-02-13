import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
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
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
          🛍️ AsianaLifestyle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
        <Navbar.Collapse id="navbarTogglerDemo01">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category">
              Category
            </Nav.Link>
            {!auth?.user ? (
              <>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </>
            ) : (
              <NavDropdown title={auth?.user?.name} id="navbarDropdown">
                <NavDropdown.Item as={NavLink} to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                  Dashboard
                </NavDropdown.Item>

                <NavDropdown.Item onClick={handleLogout} as={NavLink} to="/login">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link as={NavLink} to="/cart">
              Cart (0)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
