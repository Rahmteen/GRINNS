import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Tour = () => {
	return (
		<Container className="tour-container text-white mt-5">
			<Row className="mt-3 mb-3 d-flex justify-content-center">
				<Col as={Button} variant="danger" className="tour-button text-center font-roboto text-white" md={6}>
					<a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.observatoryoc.com/EventDetail?tmeventid=vvG10ZpihDoxo9&offerid=0">
						<i>10/01/21</i>
						<div>Santa Ana, CA</div>The Observatory
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Tour;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Sept 4 10:11 2018 +0100" git commit --amend --no-edit --date "Tue Sept 4 10:11 2018 +0100"