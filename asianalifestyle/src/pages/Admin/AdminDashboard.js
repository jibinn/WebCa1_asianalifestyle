import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AdminMenu from '../../components/layouts/AdminMenu';
import { useAuth } from '../../context/Auth';

const AdminDashboard = () => {
    const [auth]=useAuth();
  return (
    <Container>
      <Row>
        <Col>
          <AdminMenu />
        </Col>
        <Col>
          <h2>Admin Details</h2>
          <p>Name: {auth?.user?.name}</p>
          <p>Email: {auth?.user?.email}</p>
          <p>Contact: {auth?.user?.phone}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
