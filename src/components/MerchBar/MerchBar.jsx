import React, { Fragment } from "react";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";

const MerchBar = () => {
	return (
		<Fragment>
			<Container className="p-3">
				<Row className="text-left ml-auto">
					<Col md={3}>
						<Card className="merch-card card-shadow p-0">
							<a href="https://www.grinns.shop/products/grinns-red-tee">
								<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/redtee+(1).webp"} width="100%" height="100%" alt="GRINNS red tee"/>
							</a>
							<Card.Body>
								<Card.Text className="text-center text-white font-roboto">
									<i>
										<small>GRINNS</small>{" "}
									</i>
									red tee
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card className="merch-card card-shadow p-0">
							<a href="https://www.grinns.shop/products/grinns-block-tee">
								<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/blocktee+(1).webp"} width="100%" height="100%" alt="GRINNS block tee"/>
							</a>
							<Card.Body>
								<Card.Text className="text-center text-white font-roboto">
									<i>
										<small>GRINNS</small>{" "}
									</i>
									block tee
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card className="merch-card card-shadow p-0">
							<a href="https://www.grinns.shop/products/the-grinns-golden-hour">
								<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/ghc.webp"} width="100%" height="100%" alt="GRINNS golden hour CD"/>
							</a>
							<Card.Body className="">
								<Card.Text className="text-center text-white font-roboto">
									<i>
										<small>GRINNS</small>{" "}
									</i>
									golden hour - cd
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card className="merch-card card-shadow p-0">
							<a href="https://www.grinns.shop/products/golden-hour-vinyl">
								<Card.Img className="" variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/ghv.webp"} width="100%" height="100%" alt="GRINNS golden hour VINYL"/>
							</a>
							<Card.Body className="">
								<Card.Text className="text-center text-white font-roboto">
									<i>
										<small>GRINNS</small>{" "}
									</i>
									golden hour - vinyl
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default MerchBar;
