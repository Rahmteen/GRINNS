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
			<Col md={3}>
				<Card className="merch-card" style={{ width: '13rem' }}>
					<Card.Img variant="top" src={red} />
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>{' '}
							red tee
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={3}>
				<Card className="merch-card" style={{ width: '13rem' }}>
					<Card.Img variant="top" src={block} />
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>{' '}
							block tee
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Fragment>
	);
};

export default MerchItem;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
