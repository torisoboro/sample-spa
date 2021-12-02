import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

export const NabVar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>マネーフォワードクラウド</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/user">User</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://payroll.ebisubook.co.in/employees">給与従業員</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
