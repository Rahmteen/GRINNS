import React, { Fragment } from "react";
import { Container, Col, Row, Nav } from "react-bootstrap";

const Footer = () => {
	return (
		<Fragment>
			<Container className="pt-4 social-nav pb-4 mt-4 pb-5 mx-auto">
				<Nav className="mt-4">
					<Row className="text-center mx-auto mb-4 mt-4">
						<Col className=" mx-auto mt-3 social-nav text-white font-roboto" md={12}>
							<i className="mr-3 my-auto">GRINNS</i>
							<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thegrinns/?hl=en">
								<i className="fab fa-instagram-square mr-2"></i>
							</a>
							<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TheGrinns">
								<i className="fab fa-twitter-square mr-2"></i>
							</a>
							<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@thegrinns?lang=en">
								<i className="fab fa-tiktok mr-2"></i>
							</a>
							<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc">
								<i className="fab fa-spotify mr-2"></i>
							</a>
							<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/artist/the-grinns/1033694700">
								<i className="fab fa-apple mr-2"></i>
							</a>
						</Col>
						<Col className="contact-booking mt-2" md={12}>
							<small>
								<a className="mr-2" href="mailto:thegrinns@gmail.com">
									contact
								</a>
								|
								<a className="ml-2" href="mailto:dboyle@apa-agency.com">
									booking
								</a>
							</small>
						</Col>
					</Row>
				</Nav>
			</Container>
		</Fragment>
	);
};

export default Footer;