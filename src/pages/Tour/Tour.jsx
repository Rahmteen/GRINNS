import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, CardGroup, Card, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import axios from 'axios';

import sd8 from '../../../assets/images/shows/sd-8.png';
import sa20 from '../../../assets/images/shows/sa-20.png';

const Tour = () => {
	return (
		<Container className="tour-container text-white mt-5">
			<Row className="mt-3 mb-3 d-flex justify-content-center">
				<Col as={Button} variant="danger" className="tour-button text-center font-roboto text-white" md={6}>
					<a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.somasandiego.com/event/grinns/">
						<i>08/07/21</i>
						<div>San Diego, CA</div>SOMA
					</a>
				</Col>
			</Row>
			<Row className="mt-3 mb-3 d-flex justify-content-center">
				<Col as={Button} variant="danger" className="tour-button text-center font-roboto text-white" md={6}>
					<a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.observatoryoc.com/EventDetail?tmeventid=vvG10ZpihDoxo9&offerid=0">
						<i>08/20/21</i>
						<div>Santa Ana, CA</div>The Observatory
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Tour;

// LC_ALL=C GIT_COMMITTER_DATE="Tue May 1 10:11 2018 +0100" git commit --amend --no-edit --date "Tue May 1 10:11 2018 +0100"

{
	/* <Col lg={6} md={6} sm={12} className="mb-2 mt-2">
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
</Col> */
}
