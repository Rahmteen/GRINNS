import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Card, Carousel, CarouselItem, Badge, Container, Col, Row, Image, Button, Navbar, Nav } from 'react-bootstrap';

import BG from '../../../assets/images/band/bg1.png';

import NavBar from '../NavBar';
import YouTube from '../Youtube/YouTube';
import axios from 'axios';

const BandImages = () => {
	return (
		<Fragment>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Fragment>
	);
};

export default BandImages;

// LC_ALL=C GIT_COMMITTER_DATE="Mon Mar 5 12:06 2018 +0100" git commit --amend --no-edit --date "Mon Mar 5 12:06 2018 +0100"
