
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import UserMenu from '../../components/layouts/UserMenu';
import { useAuth } from '../../context/Auth';
const AsiaDashboard = () => {
  const [auth]=useAuth();
  return (
    <Container>
      <Row>
        <Col>
          <UserMenu />
        </Col>
        <Col>
          <h2>User Details</h2>
          <p>Name: {auth?.user?.name}</p>
          <p>Email: {auth?.user?.email}</p>
          <p>Phone: {auth?.user?.phone}</p>
          <p>Address: {auth?.user?.address}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AsiaDashboard
