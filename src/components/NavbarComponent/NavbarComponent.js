import React from "react";
import styled from "styled-components";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {FaUser, FaPhoneAlt} from "react-icons/fa"

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOJA DE BEBIDAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink href="#home">Início</NavLink>
            <NavLink href="#link">Todos os produtos</NavLink>
            <NavLink href="#link">Cerveja</NavLink>
            <NavLink href="#link"><FaPhoneAlt/> Contato</NavLink>
            <NavLink href="#link"><FaUser/> Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavLink = styled(Nav.Link)`
  color: white !important;
  margin-right: 5vw;
  transition: 0.3s;
  &:hover {
    color: #dd9177 !important;
  }
`;

export default NavbarComponent;
