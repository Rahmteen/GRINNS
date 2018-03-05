import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Card } from 'react-bootstrap';


import MerchItem from '../MerchItem';
import axios from 'axios';

const MerchBar = () => {
	return (
		<Container className="merchbar-container p-4" fluid>
			<Row>
					<MerchItem></MerchItem>
		
			</Row>
		</Container>
	);
};

export default MerchBar;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"
