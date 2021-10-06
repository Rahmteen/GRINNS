import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Tour = () => {
	return (
		<Container className="tour-container text-white mt-5">
			<Row className="mt-3 mb-3 d-flex justify-content-center">
				<Col as={Button} variant="danger" className="tour-button text-center font-roboto text-white" md={6}>
					<a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.ticketweb.com/event/nothing-fest-iii-garden-amphitheatre-tickets/11308975">
						<i>11/13/21</i>
						<div>Garden Grove, CA</div>The Garden Amp
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Tour;
