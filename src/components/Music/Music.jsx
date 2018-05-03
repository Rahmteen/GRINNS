import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardDeck, Col, Row, Image, Button } from 'react-bootstrap';
import madeintheshade from '../../../assets/images/mits.png';
import onmyown from '../../../assets/images/omw.png';
import tasteofwater from '../../../assets/images/taste.png';
import reunion from '../../../assets/images/reunion.jpeg';

const MusicBar = () => {
	return (
		<Fragment>
			<CardDeck className="mx-auto text-center d-flex align-content-center music-container">
				<Card bg={'dark'} style={{ width: '100%' }}>
					<a>
						<Card.Img variant="top" src={onmyown} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
					</Card.Body>
				</Card>

				<Card bg={'dark'} style={{ width: '100%' }}>
					<a>
						<Card.Img variant="top" src={madeintheshade} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">made in the shade</Card.Title>
					</Card.Body>
				</Card>

				<Card bg={'dark'} style={{ width: '100%' }}>
					<a>
						<Card.Img variant="top" src={tasteofwater} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
					</Card.Body>
				</Card>
				<Card bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/tg_reunion">
						<Card.Img variant="top" src={reunion} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">reunion</Card.Title>
					</Card.Body>
				</Card>
			</CardDeck>
		</Fragment>
	);
};

export default MusicBar;
