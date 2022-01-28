import React, { Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

const MusicBar = () => {
	return (
		<Fragment>
			<Container className="mx-auto text-center music-container m-0 p-0">
				<Row className="m-0 p-0">
					<Col md={3}>
					<Parallax className="custom-class mb-5" y={[30, -20]} tagOuter="figure">
						<Card className="card-shadow" bg={"dark"}>
							<a href="https://lnk.to/SEARCHLIGHTS">
								<Card.Img variant="top" className="p-3" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/search+(1).webp"} width="100%" height="100%" alt="Searchlights" />
							</a>
							<Card.Body className="mx-auto">
								<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">searchlights</Card.Title>
							</Card.Body>
						</Card>
						</Parallax>
					</Col>
					<Col md={3}>
					<Parallax className="custom-class mb-5" y={[30, -20]} tagOuter="figure">
						<Card className="card-shadow" bg={"dark"}>
							<a href="https://lnk.to/cadc4tIj">
								<Card.Img variant="top" className="p-3" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/omw.webp"} width="100%" height="100%" alt="On My Own" />
							</a>
							<Card.Body className="mx-auto">
								<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">on my own</Card.Title>
							</Card.Body>
						</Card>
						</Parallax>
					</Col>
					<Col md={3}>
						<Card className="card-shadow" bg={"dark"}>
							<a href="https://lnk.to/9md2E6ke">
								<Card.Img variant="top" className="p-3" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/mits.webp"} width="100%" height="100%" alt="Made in the Shade" />
							</a>
							<Card.Body className="mx-auto">
								<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">made in the shade</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card className="card-shadow" bg={"dark"}>
							<a href="https://lnk.to/J1tFOdKN">
								<Card.Img variant="top" className="p-3" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/taste.webp"} width="100%" height="100%" alt="Taste of Water" />
							</a>
							<Card.Body className="mx-auto">
								<Card.Title className="text-center text-white youtube-title mb-2 font-roboto mt-1">taste of water</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default MusicBar;
