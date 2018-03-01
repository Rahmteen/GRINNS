import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';

import NavBar from '../../components/NavBar';
import YouTube from '../../components/Youtube/YouTube';
import axios from 'axios';

const Landing = () => {
	return (
		<Container className="landing-container p-4" fluid>
        <NavBar />
        <YouTube />
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Feb 19 09:11 2018 +0100" git commit --amend --no-edit --date "Mon Feb 19 09:11 2018 +0100"
