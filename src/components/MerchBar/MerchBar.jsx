import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, CardDeck, Badge, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
import red from '../../../assets/images/merch/redtee.png';
import block from '../../../assets/images/merch/blocktee.png';
import ghv from '../../../assets/images/merch/ghv.png';
import ghc from '../../../assets/images/merch/ghc.png';

import NavBar from '../NavBar';
import axios from 'axios';

const MerchBar = () => {
	return (
		<Fragment>
			<CardDeck className="merch-container">
				<Card className="merch-card" style={{ width: '100%' }}>
					<a href="https://www.grinns.shop/products/grinns-red-tee">
						<Card.Img variant="top" src={red} />
					</a>
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>
							<br />
							red tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card" style={{ width: '100%' }}>
					<a href="https://www.grinns.shop/products/grinns-block-tee">
						<Card.Img variant="top" src={block} />
					</a>
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>
							<br />
							block tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card" style={{ width: '100%' }}>
					<a href="https://www.grinns.shop/products/golden-hour-vinyl">
						<Card.Img variant="top" src={ghv} width="90%" />
					</a>
					<Card.Body className="">
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>
							<br />
							golden hour - [ vinyl ]
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card" style={{ width: '100%' }}>
					<a href="https://www.grinns.shop/products/the-grinns-golden-hour">
						<Card.Img variant="top" src={ghc} width="90%" />
					</a>
					<Card.Body className="">
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{' '}
							</i>
							<br />
							golden hour - [ cd ]
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</Fragment>
	);
};

export default MerchBar;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
