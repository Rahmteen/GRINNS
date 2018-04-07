import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, CardGroup, Card, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import axios from 'axios';

import sd8 from '../../../assets/images/shows/sd-8.png';
import sa20 from '../../../assets/images/shows/sa-20.png';

const Tour = () => {
	return (
		<Container className="tour-container text-white ">
			<Row className="mt-2 mb-2">
				<Col as={Button} className="font-roboto">08/07 - San Diego, CA @ SOMA</Col>
			</Row>
			<Row className="mt-2 mb-2">
				<Col as={Button} className="font-roboto">08/20 - Santa Ana, CA @ The Observatory</Col>
			</Row>
		</Container>
	);
};

export default Tour;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"



{/* <Col lg={6} md={6} sm={12} className="mb-2 mt-2">
<Card>
	<Card.Img variant="top" src={sd8} />
	<Card.Body>
		<Card.Title>SAN DIEGO, CA</Card.Title>
		<Card.Text>SOMA, ALL AGES</Card.Text>
	</Card.Body>
	<Card.Footer>
		<small className="text-muted">Last updated 3 mins ago</small>
	</Card.Footer>
</Card>
</Col>
<Col lg={6} md={6} sm={12} className="mb-2 mt-2">
<Card>
	<Card.Img variant="top" src={sa20} />
	<Card.Body>
		<Card.Title>SANTA ANA, CA</Card.Title>
		<Card.Text>THE OBSERVATORY</Card.Text>
	</Card.Body>
	<Card.Footer>
		<small className="text-muted">Last updated 3 mins ago</small>
	</Card.Footer>
</Card>
</Col> */}