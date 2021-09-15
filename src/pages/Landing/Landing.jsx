import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

import MerchBar from "../../components/MerchBar";
import Music from "../../components/Music";
import BandImages from "../../components/BandImages";

const Landing = () => {
	return (
		<Container className="landing-container">
			{/* <BandImages></BandImages> */}
			<br />
			<Row>
				<Col md={12}>
					<marquee className="font-roboto text-white">
						{" "}
						<Image className="pr-2" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/gr_white_logo.png"} width="50em" className="text-right text-white" />{" "}
						<i>
							<a className="text-yellow" target="_blank" rel="noopener noreferrer" href="https://www.grinns.shop/">merch drop #1</a> live now!
						</i>
					</marquee>
				</Col>
			</Row>
			<Row className="underline text-white mb-4 mt-5 font-roboto ">
				<Col className=" text-white font-roboto p-0 h6 " md={6}>
					<i>merch</i>
				</Col>
				<Col className="text-right font-roboto p-0 my-auto " md={6}>
					<a className="text-white" href="https://www.grinns.shop/">
						<small>view all</small>
					</a>
				</Col>
			</Row>
			<MerchBar />
			<br />
			<br />
			<br />
			<Row className="underline mb-4 text-white font-roboto">
				<Col className="text-white font-roboto p-0 h6" md={6}>
					<i>releases</i>
				</Col>
				<Col className=" text-right text-white font-roboto p-0 my-auto" md={6}>
					<a className="text-white" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc">
						<small>view all</small>
					</a>
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
