import React from 'react';
import { Navbar, Nav } from 'rsuite'
import Links from './Links';


function NavBar() {
    return (
        <Navbar>
            <Navbar.Body>
                <Nav>
                    <Nav.Item className="font-bolder" href="/home">Keaton Brewster</Nav.Item>
                    <Nav.Item href="/about">About</Nav.Item>
                    <Nav.Item href='/portfolio'>Portfolio</Nav.Item>
                    {/* May adjust the resume page. Doon't have time for it right now though */}
                    {/* <Nav.Item href="/resume">Resume</Nav.Item> */}
                    <Nav.Item href='/contact'>Contact</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Links />
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavBar;