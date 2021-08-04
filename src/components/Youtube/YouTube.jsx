import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

const YouTube = () => {
	return (
		<Fragment>
			<Container className="youtube-container mt-4 mb-2 ">
				<Row>
					<Col className="text-left youtube-title mt-2 font-roboto" md={12}>
						<i>taste of water</i>
					</Col>
				</Row>
				<Row className="youtube-featured">
					<Col className="mb-4 mt-4" md={12}>
						<ReactPlayer className="mx-auto youtube-player" url="https://www.youtube.com/embed/eMaDZ2ZZpns" muted />
					</Col>
				</Row>
				<Row>
					<Col className="text-right youtube-title mb-2 font-roboto" md={12}>
						<i><small>view all</small></i>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default YouTube;


