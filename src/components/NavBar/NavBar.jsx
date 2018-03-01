import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

const NavBar = () => {
	return (
		<Fragment>
			<Container className="main-nav-container" fluid>
				<Row className="main-nav-row ">
					<Col className="text-center pt-2 pb-2" md={12}>
						<Navbar variant="light" collapseOnSelect expand="lg">
							<Container fluid>
								<Row className="nav-mobile-row mx-auto" >
									<Col  md={12}>
										<Navbar.Brand as={Link} to="/" className="text-left">
											<Image src={LOGO} width="190em" />
										</Navbar.Brand>
										<Navbar.Toggle aria-controls="responsive-navbar-nav" />
									</Col>
								</Row>
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="me-auto main-nav">
										<Nav.Link as={Link} to="/merch">
											merch
										</Nav.Link>
										<Nav.Link as={Link} to="/home">
											tour
										</Nav.Link>
										<Nav.Link as={Link} to="/content">
											content
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</Col>
				</Row>
				</Container>
				<Container className="p-0 social-nav" fluid>
				<Row>
					<Col className="text-right mt-3 social-nav">
						<span>
							<i className="fab fa-instagram-square mr-2"></i>
							<i className="fab fa-twitter-square mr-2"></i>
							<i className="fab fa-tiktok mr-2"></i>
							<i className="fab fa-spotify mr-2"></i>
							<i className="fab fa-apple mr-2"></i>
						</span>
					</Col>
				</Row>
				</Container>
		</Fragment>
	);
};

export default NavBar;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Feb 13 12:11 2018 +0100" git commit --amend --no-edit --date "Tue Feb 13 12:11 2018 +0100"
