import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

import Assets from '../../components/Assets';
import axios from 'axios';

const Landing = () => {
	return (
		<Container className="landing-container p-4" fluid>
			<Row>
				<Col className="text-center" md={12}>
					<Navbar bg="warning" variant="light">
						<Container>
							<Navbar.Brand as={Link} to="/">
								<Image src={LOGO} width="230em" />
							</Navbar.Brand>
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
						</Container>
					</Navbar>
				</Col>
			</Row>
			<Row>
				<Col className="text-right mt-2">
					<span>
						<i className="fab fa-instagram-square mr-1"></i> 
            <i className="fab fa-twitter-square mr-1"></i> 
            <i className="fab fa-tiktok mr-1"></i>
            <i className="fab fa-spotify mr-1"></i>
            <i className="fab fa-apple mr-1"></i>
					</span>
				</Col>
			</Row>
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Feb 12 14:00 2018 +0100" git commit --amend --no-edit --date "Mon Feb 12 14:00 2018 +0100"
