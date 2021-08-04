import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
import sa20 from '../../../assets/images/shows/sa-20.png';
import sd8 from '../../../assets/images/shows/sd-8.png';

import NavBar from '../NavBar';
import YouTube from '../Youtube/YouTube';
import axios from 'axios';

const ShowItem = () => {
	return (
		<Fragment>
			<Card className="merch-card" style={{ width: '11rem' }}>
				<Card.Img variant="top" src={sd8} />
				<Card.Body>
					<Card.Text className="text-center text-white font-roboto">
						<i>
							<small>GRINNS</small>{' '}
						</i>{' '}
						red tee
					</Card.Text>
				</Card.Body>
			</Card>

			<Card className="merch-card" style={{ width: '11rem' }}>
				<Card.Img variant="top" src={sa20} />
				<Card.Body>
					<Card.Text className="text-center text-white font-roboto">
						<i>
							<small>GRINNS</small>{' '}
						</i>{' '}
						block tee
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default ShowItem;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
