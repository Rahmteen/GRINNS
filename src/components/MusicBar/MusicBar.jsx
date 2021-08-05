import React from 'react';
import { Container, Card, CardGroup, Col, Row, Image, Button } from 'react-bootstrap';
import mits from '../../../assets/images/music/mits.png';
import omw from '../../../assets/images/music/omw.png';
import taste from '../../../assets/images/music/taste.png';

const MusicBar = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={omw} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
                    <Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={mits} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
                    <Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={taste} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MusicBar;
