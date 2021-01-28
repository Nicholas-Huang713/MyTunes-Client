import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './BotNav.scss';

export default function BotNav() {
    return (
        <Nav defaultActiveKey="/home" as="ul" className="nav-bot justify-content-center"> 
            <Nav.Item as="li">
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
