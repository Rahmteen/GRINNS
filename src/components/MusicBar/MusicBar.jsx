import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardDeck, Col, Row, Image, Button } from 'react-bootstrap';
import mits from '../../../assets/images/music/mits.png';
import omw from '../../../assets/images/music/omw.png';
import taste from '../../../assets/images/music/taste.png';
import re from '../../../assets/images/music/reunion.jpeg';

const MusicBar = () => {
	return (
		<Fragment>
			<CardDeck className="mx-auto text-center d-flex align-content-center music-container">
				<Card bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/tg_reunion">
						<Card.Img variant="top" src={omw} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
					</Card.Body>
				</Card>

				<Card bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/tg_reunion">
						<Card.Img variant="top" src={mits} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">made in the shade</Card.Title>
					</Card.Body>
				</Card>

				<Card bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/tg_reunion">
						<Card.Img variant="top" src={taste} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
					</Card.Body>
				</Card>
				<Card bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/tg_reunion">
						<Card.Img variant="top" src={re} />
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
