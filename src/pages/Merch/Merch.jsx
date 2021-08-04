import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import axios from 'axios';
import MerchBar from '../../components/MerchBar';

const Merch = () => {
	return (
		<Fragment>
        <MerchBar/>
		</Fragment>
	);
};

export default Merch;
