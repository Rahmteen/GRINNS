import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
import red from '../../../assets/images/rb-1.png';
import block from '../../../assets/images/bw-1.png';

import NavBar from '../NavBar';
import YouTube from '../Youtube/YouTube';
import axios from 'axios';

const MerchItem = () => {
	return (
		<Fragment>
			<Col className="merch-card-col mr-1" md={4}>
				<Card style={{ width: '14rem' }}>
					<Card.Img variant="top" src={red} />
					<Card.Body>
						<Card.Title className="text-center">GRINNS RED TEE</Card.Title>
					</Card.Body>
				</Card>
			</Col>
			<Col className="merch-card-col mr-1" md={4}>
				<Card style={{ width: '14rem' }}>
					<Card.Img variant="top" src={block} />
					<Card.Body>
						<Card.Title className="text-center">GRINNS RED TEE</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		</Fragment>
	);
};

export default MerchItem;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"
