import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Fragment>
			<Container className="main-nav-container pt-5 mb-2">
				<Row className="main-nav-row ">
					<Col className="text-center pt-2 pb-2" md={12}>
						<Navbar variant="light" collapseOnSelect expand="lg">
							<Container fluid>
								<Row className="nav-mobile-row mx-auto">
									<Col md={12}>
										<Navbar.Brand as={Link} to="/" className="text-right">
											<Image src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/gr_white_logo.png"} width="120em" className="text-right" />
										</Navbar.Brand>
										<Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{borderColor: "transparent"}}><i className="text-white fas fa-smile"></i></Navbar.Toggle>
									</Col>
								</Row>
								<Navbar.Collapse  id="responsive-navbar-nav">
									<Nav className="me-auto main-nav ">
										<Nav.Link href="https://www.grinns.shop"  className="font-roboto">
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


