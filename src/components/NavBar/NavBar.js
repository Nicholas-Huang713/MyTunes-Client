import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './NavBar.scss';
import { useHistory } from 'react-router-dom';
import {UserContext, UserDataContext} from '../../helpers/UserContext';
import {getJwt, removeJwt} from '../../helpers/jwt';

export default function NavBar() {
    let history = useHistory();
    const {user, setUser} = useContext(UserContext);
    const {userData, setUserData} = useContext(UserDataContext);

    const handleLogout = () => {
        removeJwt();
        setUser(null);
        history.push('/');
    }

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand style={{cursor: "pointer"}} onClick={() => history.push('/')}>MyTunes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {user && 
                            <>
                                <Nav.Link onClick={() => history.push('/dashboard')}>Dashboard</Nav.Link>
                                <Nav.Link>Pricing</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {user ? (
                            <NavDropdown title={<><AccountCircleIcon /> {userData !==null && `${userData.username}`}</>} id="collapsible-nav-dropdown" drop='left'>
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => history.push('/dashboard')}>Dashboard</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link onClick={() => history.push('/login')}>Login</Nav.Link>
                                <Nav.Link onClick={() => history.push('/registration')} eventKey={2}>
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
