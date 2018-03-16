import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, Carousel, CarouselItem, Badge, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import BG1 from '../../../assets/images/band/bg1.png';
import BG2 from '../../../assets/images/band/bg2.png';
import BG3 from '../../../assets/images/band/bg3.png';
import NavBar from '../NavBar';
import YouTube from '../Youtube/YouTube';
import axios from 'axios';

const BandImages = () => {
	return (
		<Fragment>
			<Carousel className="mb-5" controls={false} indicators={false} interval={5000}>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={BG1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={BG2} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={BG3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
			{/* <Container className="p-0 social-nav pb-4">
				<Row>
					<Col className="text-right mt-3 social-nav">
						<span>
							<i className="fab fa-instagram-square mr-2"></i>
							<i className="fab fa-twitter-square mr-2"></i>
							<i className="fab fa-tiktok mr-2"></i>
							<i className="fab fa-spotify mr-2"></i>
							<i className="fab fa-apple mr-2"></i>
						</span>
					</Col>
				</Row>
			</Container> */}
		</Fragment>
	);
};

export default BandImages;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
