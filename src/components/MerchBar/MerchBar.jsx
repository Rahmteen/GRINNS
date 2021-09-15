import React, { Fragment } from "react";
import { Card, CardDeck } from "react-bootstrap";

const MerchBar = () => {
	return (
		<Fragment>
			<CardDeck className="merch-container">
				<Card className="merch-card card-shadow" style={{ width: "100%" }}>
					<a href="https://www.grinns.shop/products/grinns-red-tee">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/merch/redtee.png"} />
					</a>
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{" "}
							</i>
							<br />
							red tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card card-shadow" style={{ width: "100%" }}>
					<a href="https://www.grinns.shop/products/grinns-block-tee">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/merch/blocktee.png"} />
					</a>
					<Card.Body>
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{" "}
							</i>
							<br />
							block tee
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card card-shadow" style={{ width: "100%" }}>
					<a href="https://www.grinns.shop/products/golden-hour-vinyl">
						<Card.Img className="p-3" variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/merch/ghv.png"} width="90%" />
					</a>
					<Card.Body className="">
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{" "}
							</i>
							<br />
							golden hour - vinyl
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="merch-card card-shadow" style={{ width: "100%" }}>
					<a href="https://www.grinns.shop/products/the-grinns-golden-hour">
						<Card.Img variant="top" src={"https://grinns-2021-s3-cfb.s3.amazonaws.com/merch/ghc.png"} width="90%" />
					</a>
					<Card.Body className="">
						<Card.Text className="text-center text-white font-roboto">
							<i>
								<small>GRINNS</small>{" "}
							</i>
							<br />
							golden hour - cd
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</Fragment>
	);
};

export default MerchBar;
