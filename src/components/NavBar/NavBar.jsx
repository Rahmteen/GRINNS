import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Navbar, Nav } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

const NavBar = () => {
	return (
		<Fragment>
			<Parallax className="parallax-nav" y={[10, 10]} tagOuter="figure">
				<Container className="main-nav-container p-1 m-0" fluid>
					<Row className="main-nav-row">
						<Col className="text-center p-0" md={12}>
							<Navbar variant="light" collapseOnSelect expand="lg">
								<Container fluid>
									<Row className="nav-mobile-row mx-auto">
										<Col md={12}>
											<Navbar.Brand as={Link} to="/" className="text-right">
												<Image src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/gr_white_logo.webp"} width="80vh" className="text-center" height="auto" alt="GRINNS" />
											</Navbar.Brand>
											<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: "transparent" }}>
												<i className="text-white fas fa-smile"></i>
											</Navbar.Toggle>
										</Col>
									</Row>
									<Navbar.Collapse id="responsive-navbar-nav">
										<Nav className="me-auto main-nav ">
											<Nav.Link href="https://www.grinns.shop" className="font-roboto">
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
			</Parallax>
		</Fragment>
	);
};

export default NavBar;
