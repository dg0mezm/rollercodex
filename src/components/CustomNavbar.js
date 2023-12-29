import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import '../static/styles/Navbar.css'

export default function CustomNavbar() {

    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>RollerCodex</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className="bi bi-list"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to='/miners'>Mineros</NavLink>
                        <NavLink to='/users'>Usuarios</NavLink>
                        <NavLink to='/how-to-use'>Cómo usar</NavLink>
                        <NavLink to='/calculator'>Calculadora</NavLink>
                        <NavLink to='/contact'>Contacto</NavLink>
                        <NavLink to='/faq'>FAQ</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}