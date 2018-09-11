import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import BG1 from '../../../assets/images/band/bg1.png';
import BG2 from '../../../assets/images/band/bg2.png';
import BG3 from '../../../assets/images/band/bg3.png';

const BandImages = () => {
	return (
		<Fragment>
			<Carousel style={{ position: 'relative' }} fade={true} className="mb-5" controls={false} indicators={false} interval={5000}>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={BG2} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={BG3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>

		</Fragment>
	);
};

export default BandImages;
