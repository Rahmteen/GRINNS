import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, CardDeck, Badge, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
import red from '../../../assets/images/merch/redtee.png';
import block from '../../../assets/images/merch/blocktee.png';
import ghv from '../../../assets/images/merch/ghv.png'

import NavBar from '../NavBar';
import YouTube from '../Youtube/YouTube';
import axios from 'axios';

const MerchItem = () => {
	return (
		<Fragment>
			<CardDeck>
				<Card className="merch-card" style={{ width: '18rem' }}>
					<Card.Img variant="top" src={red} />
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i><br />
							red tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card" style={{ width: '18rem' }}>
					<Card.Img variant="top" src={block} />
					<Card.Body>
						
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i><br />
							block tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card" style={{ width: '18rem' }}>
					<Card.Img variant="top" src={ghv} />
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i><br />
							golden hour
						</Card.Text>
					</Card.Body>
				</Card>
				</CardDeck>
		</Fragment>
	);
};

export default MerchItem;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
