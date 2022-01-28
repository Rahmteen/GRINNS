import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

import MerchBar from '../../components/MerchBar';
import MusicBar from '../../components/MusicBar/MusicBar';
import BandImages from '../../components/BandImages';
import one from '../../../assets/images/104.jpg';
import two from '../../../assets/images/99.jpg';

const Landing = () => {
   return (
      <Container style={{overflowY: 'hidden'}} className='landing-container px-0' fluid>
         {/* <Parallax className="custom-class mb-5" y={[30, -20]} tagOuter="figure">
				<BandImages></BandImages>
			</Parallax> */}
         <img
            style={{
               position: 'absolute',
               top: '0',
               zIndex: '-1',
               objectFit: 'cover',
			   
            }}
            width={'100%'}
            src={one}
         />
         {/* <Row className="text-white font-roboto merch-row m-0 text-center mx-auto mt-3">
				<Col className="text-center text-white font-roboto mb-3 h4 p-3 m-0" md={12}>
					<i>GRINNS </i>MERCH{" "}
				</Col>
			</Row> */}
         {/* <Container className="mb-5 pb-5">
				<MerchBar />
			</Container> */}
         {/* 
			<Row className="text-white mb-3 font-roboto merch-row p-3 ml-0 mr-0">
				<Col className="text-center text-white font-roboto h4 m-0 p-0" md={12}>
					LATEST RELEASES
				</Col>
				<Col className="text-center font-roboto p-0 my-auto m-0" md={12}>
					<a className="text-blue" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc"></a>
				</Col>
			</Row> */}
         <Container>
            {/* <Row className="pt-4">
				<MusicBar />
			</Row> */}
         </Container>
      </Container>
   );
};

export default Landing;
