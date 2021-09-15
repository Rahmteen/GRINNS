import React, { Fragment } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const MusicBar = () => {
	return (
		<Fragment>
			<CardDeck className="mx-auto text-center d-flex align-content-center music-container">
			<Card className="p-4 card-shadow" bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/SEARCHLIGHTS">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/music/search.png"} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">searchlights</Card.Title>
					</Card.Body>
				</Card>
				<Card className="p-4 card-shadow" bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/cadc4tIj">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/music/omw.png"} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
					</Card.Body>
				</Card>

				<Card className="p-4 card-shadow" bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/9md2E6ke">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/music/mits.png"} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">made in the shade</Card.Title>
					</Card.Body>
				</Card>
				<Card className="p-4 card-shadow" bg={'dark'} style={{ width: '100%' }}>
					<a href="https://lnk.to/J1tFOdKN">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/music/taste.png"} />
					</a>
					<Card.Body className="mx-auto">
						<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">taste of water</Card.Title>
					</Card.Body>
				</Card>
			</CardDeck>
		</Fragment>
	);
};

export default MusicBar;
