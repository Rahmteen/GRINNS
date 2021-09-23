import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

import MerchBar from "../../components/MerchBar";
import Music from "../../components/Music";
import BandImages from "../../components/BandImages";

const Landing = () => {
	return (
		<Container className="landing-container p-0" fluid>
			<BandImages></BandImages>
			<Row className="text-white mb-4 font-roboto merch-row p-5">
				<Col className="text-center text-white font-roboto h4" md={12}>
					<i>GRINNS </i>
					MERCH
				</Col>
				<Col className="text-center font-roboto p-0 my-auto " md={12}>
					<a className="text-blue" href="https://www.grinns.shop/">
						<small>shop</small>
					</a>
				</Col>
			</Row>
			<Container className="pt-4">
				<MerchBar />
			</Container>
			<br />
			<br />
			<Row className="text-white mb-3 font-roboto merch-row p-5">
				<Col className="text-center text-white font-roboto h4" md={12}>
					{/* <i>GRINNS </i> */}
					RELEASES
				</Col>
				<Col className="text-center font-roboto p-0 my-auto " md={12}>
					<a className="text-blue" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc">
						{/* <small>view all</small> */}
					</a>
				</Col>
			</Row>
			<Row className="pt-4">
				<Music />
			</Row>
		</Container>
	);
};

export default Landing;

// LC_ALL=C GIT_COMMITTER_DATE="Sun Jan 6 12:11 2018 +0100" git commit --amend --no-edit --date "Sun Jan 6 12:11 2018 +0100"
