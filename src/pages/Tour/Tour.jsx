import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import two from '../../../assets/images/99.jpg';

const Tour = () => {
   return (
      <Container className='tour-container text-white px-0' fluid>
         <img
            style={{
               position: 'absolute',
               top: '0',
               zIndex: '-1',
               objectFit: 'cover',
            }}
            width={'100%'}
            src={two}
         />
         {/* <Row className="mt-3 mb-3 d-flex justify-content-center">
				<Col as={Button} variant="danger" className="tour-button text-center font-roboto text-white" md={6}>
					<a target="_blank" rel="noopener noreferrer" className="text-white" href="https://www.ticketweb.com/event/nothing-fest-iii-garden-amphitheatre-tickets/11308975">
						<i>11/13/21</i>
						<div>Garden Grove, CA</div>The Garden Amp
					</a>
				</Col>
			</Row> */}
      </Container>
   );
};

export default Tour;
