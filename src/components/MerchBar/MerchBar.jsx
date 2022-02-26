import React, { Fragment } from "react";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";

const MerchBar = () => {
  return (
    <Fragment>
      <Container className="px-0 pb-2 mb-5 mt-2">
        <Row className="text-left ml-auto px-0">
          <Col className="my-auto pr-3 pl-0" md={3}>
            <Card className="merch-card my-1 card-shadow pt-3 px-0">
              <a href="https://www.grinns.shop/products/grinns-red-tee">
                <Card.Img
                  className="px-5 py-2"
                  variant="top"
                  src={
                    "https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/redtee+(1).webp"
                  }
                  width="100%"
                  height="100%"
                  alt="GRINNS red tee"
                />
              </a>
              <Card.Body>
                <Card.Text className="text-center text-black font-roboto">
                  <i>
                    <small className="pr-1">GRINNS</small>{" "}
                  </i>
                  red tee
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-auto pr-3 pl-0" md={3}>
            <Card className="merch-card my-1 card-shadow pt-3 px-0">
              <a href="https://www.grinns.shop/products/grinns-block-tee">
                <Card.Img
                  className="px-5 py-2"
                  variant="top"
                  src={
                    "https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/blocktee+(1).webp"
                  }
                  width="100%"
                  height="100%"
                  alt="GRINNS block tee"
                />
              </a>
              <Card.Body>
                <Card.Text className="text-center text-black font-roboto">
                  <i>
                    <small className="pr-1">GRINNS</small>{" "}
                  </i>
                  block tee
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-auto pr-3 pl-0" md={3}>
            <Card className="merch-card my-1 card-shadow pt-3 px-0">
              <a href="https://www.grinns.shop/products/the-grinns-golden-hour">
                <Card.Img
                  className="px-5 py-2"
                  variant="top"
                  src={
                    "https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/ghc.webp"
                  }
                  width="100%"
                  height="100%"
                  alt="GRINNS golden hour CD"
                />
              </a>
              <Card.Body className="">
                <Card.Text className="text-center text-black font-roboto">
                  <i>
                    <small className="pr-1">GRINNS</small>{" "}
                  </i>
                  golden hour - cd
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-auto pr-3 pl-0" md={3}>
            <Card className="merch-card my-1 card-shadow pt-3 px-0">
              <a href="https://www.grinns.shop/products/golden-hour-vinyl">
                <Card.Img
                  className="px-5 py-2"
                  variant="top"
                  src={
                    "https://grinns-2021-s3-cfb.s3.amazonaws.com/optimized-webp-assets/ghv.webp"
                  }
                  width="100%"
                  height="100%"
                  alt="GRINNS golden hour VINYL"
                />
              </a>
              <Card.Body className="">
                <Card.Text className="text-center text-black font-roboto">
                  <i>
                    <small className="pr-1">GRINNS</small>{" "}
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
