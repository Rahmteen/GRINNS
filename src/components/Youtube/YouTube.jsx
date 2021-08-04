import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
import OMW from '../../../assets/images/mitsgreen.png';

const YouTube = () => {
	return (
		<Fragment>
			<Col md={4} className="text-left text-white youtube-title mb-2 font-roboto mt-3" >
				<i>taste of water</i>
				<br />
				<Image className="mt-1 mb-1 " src={OMW} width="100%" />
				<br />
				<i className="fab fa-youtube mt-3 pl-2"></i>
				<i className="fab fa-spotify mt-3 pl-2"></i>
				<i className="fab fa-apple mt-3 pl-2"></i>
				{/* <i>
					<small>view all</small>
				</i> */}
			</Col>
		</Fragment>
	);
};

export default YouTube;
