import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

const YouTube = () => {
	return (
		<Fragment>
			<Container className="youtube-container mt-4 mb-2">
				<Row>
					<Col className="text-left youtube-title mb-2 mt-2 p-0" md={12}>
						taste of water music video
					</Col>
				</Row>
				<Row className="youtube-featured">
					<Col className="mb-4 mt-4" md={12}>
						<ReactPlayer className="mx-auto youtube-player" url="https://www.youtube.com/embed/eMaDZ2ZZpns" muted />
					</Col>
				</Row>
				<Row>
					<Col className="text-right youtube-title mb-2 mt-2 p-0" md={12}>
						view all
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default YouTube;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Feb 13 12:11 2018 +0100" git commit --amend --no-edit --date "Tue Feb 13 12:11 2018 +0100"
