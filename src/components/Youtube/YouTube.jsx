import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import PropTypes from "prop-types";

import LOGO from '../../../assets/images/GRINNS_LOGO.png';
// import OMW from '../../../assets/images/shows/omw.png';

const YouTube = ({ embedId }) => {
		return (
		<div className="video-responsive">
		<iframe
		  width="853"
		  height="480"
		  src={`https://www.youtube.com/embed/${embedId}`}
		  frameBorder="0"
		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen
		  title="Embedded youtube"
		/>
	  </div>
	) 
};


export default YouTube;
