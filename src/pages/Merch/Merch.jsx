import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import axios from 'axios';
import MerchBar from '../../components/MerchBar';

const Merch = () => {
	return (
		<Fragment>
			<Container>
				<Row className="underline mb-4 text-white font-roboto ">
					<Col className="text-white font-roboto p-0 h4 " md={6}>
						<i>merch</i>
					</Col>
				</Row>
				<MerchBar></MerchBar>
			</Container>
		</Fragment>
	);
};

export default Merch;
