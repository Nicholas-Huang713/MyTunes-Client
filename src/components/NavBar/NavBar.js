import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './NavBar.scss';

export default function NavBar() {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">MyTunes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/registration" eventKey={2}>
                            Register
                        </Nav.Link>
                        <NavDropdown title={<AccountCircleIcon />} id="collapsible-nav-dropdown" drop='left'>
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
