import React from "react";
import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaUser, FaPhoneAlt} from "react-icons/fa"

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">LOJA DE BEBIDAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/products">Todos os produtos</NavLink>
            <NavLink to="/beer">Cerveja</NavLink>
            <NavLink to="/contact"><FaPhoneAlt/> Contato</NavLink>
            <NavLink to="/login"><FaUser/> Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavLink = styled(Link)`
  color: white !important;
  margin-right: 5vw;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    color: #dd9177 !important;
  }
`;

export default NavbarComponent;
