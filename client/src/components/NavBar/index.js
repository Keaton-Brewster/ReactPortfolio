import React from 'react';
import { Navbar, Nav } from 'rsuite'

function NavBar() {
    return (
        <Navbar>
            <Navbar.Body>
                <Nav>
                <Nav.Item href="/">Keaton Brewster</Nav.Item>
                    <Nav.Item href="/home">Home</Nav.Item>
                    <Nav.Item href="/about">About</Nav.Item>
                    <Nav.Item href='/contact'>Contact</Nav.Item>
                </Nav>
                <Nav pullRight>
                    {/* Going to put social links here maybe? */}
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavBar;