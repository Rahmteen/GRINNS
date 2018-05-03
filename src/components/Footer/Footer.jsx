import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/123vect.png';

const Footer = () => {
	return (
		<Fragment>
			<Container className="pt-4 social-nav pb-4 mt-4 pb-5 mx-auto">
				<Nav className="mt-4">
					<Row className="text-center mx-auto mb-4 mt-4">
						<Col className=" mx-auto mt-3 social-nav text-white font-roboto" md={12}>
							<i className="mr-3 my-auto">GRINNS</i>
							<i className="fab fa-instagram-square mr-2"></i>
							<i className="fab fa-twitter-square mr-2"></i>
							<i className="fab fa-tiktok mr-2"></i>
							<i className="fab fa-spotify mr-2"></i>
							<i className="fab fa-apple mr-2"></i>
						</Col>
						<Col className="contact-booking mt-2" md={12}>
							<small><a className="mr-2" href="mailto:thegrinns@gmail.com">
								contact
							</a>|
							<a className="ml-2" href="mailto:dboyle@apa-agency.com">
								booking
							</a></small>
						</Col>
					</Row>
				</Nav>
			</Container>
		</Fragment>
	);
};

export default Footer;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Feb 13 12:11 2018 +0100" git commit --amend --no-edit --date "Tue Feb 13 12:11 2018 +0100"
