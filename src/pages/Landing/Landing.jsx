import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

import NavBar from '../../components/NavBar';
import YouTube from '../../components/Youtube/YouTube';
import axios from 'axios';
import MerchBar from '../../components/MerchBar';
import BG from '../../../assets/images/BG_GRINNS.png';

const Landing = () => {
	return (
		<Container className="landing-container">
			<Row>
			<Col className=" mt-4" md={8}>
					<MerchBar />
				</Col>
				<Col className=" my-auto" md={6}>
					<Image width="100%" src={BG} />
				</Col>

				<YouTube />

			</Row>
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"
