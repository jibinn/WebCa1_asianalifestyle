import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserMenu from '../../components/layouts/UserMenu';
const Profile = () => {
  return (
    <Container>
    <Row>
      <Col>
        <UserMenu />
      </Col>
      <Col>
        <h1>My Profile</h1>
        {/* Add your category creation form or content here */}
      </Col>
    </Row>
  </Container>
  );
};

export default Profile;
