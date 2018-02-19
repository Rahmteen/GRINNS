import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player'

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

const YouTube = () => {
	return (
		<Fragment>
			<Container className="youtube-container mt-4 mb-2">
				<Row className="youtube-featured">
					<Col className="text-center text-yellow mb-2 mt-2" md={12}>
						<b>
							TASTE OF WATER MUSIC VIDEO OUT NOW!
						</b>
					</Col>
					<Col className="mb-4" md={12}>
						<ReactPlayer className="mx-auto youtube-player" url="https://www.youtube.com/embed/eMaDZ2ZZpns" muted />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default YouTube;

// LC_ALL=C GIT_COMMITTER_DATE="Tue Feb 13 12:11 2018 +0100" git commit --amend --no-edit --date "Tue Feb 13 12:11 2018 +0100"
