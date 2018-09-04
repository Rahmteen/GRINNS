import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import MerchBar from '../../components/MerchBar';
import Music from '../../components/Music';
import BandImages from '../../components/BandImages';

const Landing = () => {
	return (
		<Container className="landing-container">
			<BandImages></BandImages>
			<br />
			<Row className="underline mb-4 mt-3 text-white font-roboto ">
				<Col className="text-white font-roboto p-0 h5 " md={6}>
					<i>merch</i>
				</Col>
				<Col className="text-right text-white font-roboto p-0 my-auto" md={6}>
					<a className="text-white" href="https://www.grinns.shop/"><small>view all</small></a>
				</Col>
			</Row>
				<MerchBar />
			<br />
			<br />
			<br />
			<Row className="underline mb-4 text-white font-roboto">
				<Col className="text-white font-roboto p-0 h5" md={6}>
					<i>releases</i>
				</Col>
				<Col className=" text-right text-white font-roboto p-0 my-auto" md={6}>
					<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc"><small>view all</small></a>
				</Col>
			</Row>
			<Row className="m-2">
				<Music />
			</Row>
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Thu Mar 1 11:11 2018 +0100" git commit --amend --no-edit --date "Thu Mar 1 11:11 2018 +0100"
