import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm">
			<Navbar.Brand href="https://twitter.com/Jin_Siperus" target='_blank'>
				<strong>Jin's Art Gallery</strong>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{/* <Nav.Link href="/about">About</Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;