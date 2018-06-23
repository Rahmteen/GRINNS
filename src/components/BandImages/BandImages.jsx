import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import BG2 from '../../../assets/images/band/bg2.png';
import BG3 from '../../../assets/images/band/bg3.png';

const BandImages = () => {
	return (
		<Fragment>
			<Carousel style={{ position: 'relative' }} fade={true} className="mb-5" controls={false} indicators={false} interval={5000}>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/bg2.png"} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 mx-auto" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/bg3.png"} alt="Third slide" />
				</Carousel.Item>
			</Carousel>

		</Fragment>
	);
};

export default BandImages;
