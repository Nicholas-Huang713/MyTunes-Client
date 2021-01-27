import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './NavBar.scss';
import { useHistory } from 'react-router-dom';
import {UserContext} from '../../helpers/UserContext';

export default function NavBar() {
    let history = useHistory();
    const {user, setUser} = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        history.push('/')
    }

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">MyTunes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {user && 
                            <>
                                <Nav.Link>Stuff</Nav.Link>
                                <Nav.Link>Pricing</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {user ? (
                            <NavDropdown title={<AccountCircleIcon />} id="collapsible-nav-dropdown" drop='left'>
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Item >Dashboard</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/registration" eventKey={2}>
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}
