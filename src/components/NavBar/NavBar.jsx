import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/123vect.png';

const NavBar = () => {
	return (
		<Fragment>
			<Container className="main-nav-container pt-5 mb-3">
				<Row className="main-nav-row ">
					<Col className="text-center pt-2 pb-2" md={12}>
						<Navbar variant="light" collapseOnSelect expand="lg">
							<Container fluid>
								<Row className="nav-mobile-row mx-auto">
									<Col md={12}>
										<Navbar.Brand as={Link} to="/" className="text-right">
											<Image src={LOGO} width="120em" className="text-right" />
										</Navbar.Brand>
										<Navbar.Toggle aria-controls="responsive-navbar-nav" />
									</Col>
								</Row>
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="me-auto main-nav ">
										<Nav.Link href="https://grinns.myshopify.com/"  className="font-roboto">
											merch
										</Nav.Link>
										<Nav.Link as={Link} to="/tour" className="font-roboto">
											tour
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default NavBar;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Feb 13 12:11 2018 +0100" git commit --amend --no-edit --date "Tue Feb 13 12:11 2018 +0100"
