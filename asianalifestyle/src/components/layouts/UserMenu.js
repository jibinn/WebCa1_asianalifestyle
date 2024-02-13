import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserMenu = () => {
    return (
        <Container>
            <h1 className="mt-4 mb-4">User Menu </h1>
            <Nav defaultActiveKey="/create-category" className="flex-column">
                <Nav.Link href="/dashboard/user/profile">Profile</Nav.Link>
                <Nav.Link href="/dashboard/user/orders">Orders</Nav.Link>
            </Nav>
        </Container>
    )
}

export default UserMenu
