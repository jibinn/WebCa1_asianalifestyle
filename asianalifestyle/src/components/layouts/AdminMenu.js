import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminMenu = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Admin Panel</h1>
      <Nav defaultActiveKey="/create-category" className="flex-column">
        <Nav.Link href="/dashboard/admin/create-category">Create Category</Nav.Link>
        <Nav.Link href="/dashboard/admin/create-product">Create Product</Nav.Link>
        <Nav.Link
            href="/dashboard/admin/products"
          >
            Products
          </Nav.Link>
        <Nav.Link href="/dashboard/admin/users">Users</Nav.Link>
        <Nav.Link
            href="/dashboard/admin/orders"
          
          >
            Orders
          </Nav.Link>
      </Nav>
      
    </Container>
  );
};

export default AdminMenu;
