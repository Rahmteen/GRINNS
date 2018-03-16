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

		</Fragment>
	);
};

export default BandImages;

// LC_ALL=C GIT_COMMITTER_DATE="Fri Mar 16 12:51 2018 +0100" git commit --amend --no-edit --date "Fri Mar 16 12:51 2018 +0100"
