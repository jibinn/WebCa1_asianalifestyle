import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hook/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
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
            <SearchInput/>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

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
              <Badge count={cart?.length || 0} showZero>
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
