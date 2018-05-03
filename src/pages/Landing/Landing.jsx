import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

import NavBar from '../../components/NavBar';
import axios from 'axios';
import MerchBar from '../../components/MerchBar';
import BG from '../../../assets/images/band/bg1.png';
import MusicBar from '../../components/MusicBar';
import BandImages from '../../components/BandImages';

const Landing = () => {
	return (
		<Container className="landing-container">
			<BandImages></BandImages>
			<br />
			<Row className="underline mb-4 mt-3 text-white font-roboto ">
				<Col className="text-white font-roboto p-0 h5 " md={6}>
					<i>merch</i>
				</Col>
				<Col className="text-right text-white font-roboto p-0 my-auto" md={6}>
					<small>view all</small>
				</Col>
			</Row>
		
				<MerchBar />
			<br />
			<br />
			<br />
			<Row className="underline mb-4 text-white font-roboto">
				<Col className="text-white font-roboto p-0 h5" md={6}>
					<i>releases</i>
				</Col>
				<Col className=" text-right text-white font-roboto p-0 my-auto" md={6}>
					<small>view all</small>
				</Col>
			</Row>
			<Row className="m-2">
				<MusicBar />
			</Row>
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"
