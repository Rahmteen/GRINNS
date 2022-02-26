import React, { Fragment } from "react";
import { Container, Col, Row, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <Container
        className="social-nav text-black mx-auto footer-container py-2"
        fluid
      >
        <Navbar className="">
          <Row className="text-center mx-auto py-2">
            <Col
              className=" mx-auto social-nav text-black font-roboto"
              md={12}
            >
              <a
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/thegrinns/?hl=en"
              >
                <i className="fab fa-instagram-square mr-2"></i>
              </a>
              <a
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/TheGrinns"
              >
                <i className="fab fa-twitter-square mr-2"></i>
              </a>
              <a
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@thegrinns?lang=en"
              >
                <i className="fab fa-tiktok mr-2"></i>
              </a>
              <a
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc"
              >
                <i className="fab fa-spotify mr-2"></i>
              </a>
              <a
                className="text-black"
                target="_blank"
                rel="noopener noreferrer"
                href="https://music.apple.com/us/artist/the-grinns/1033694700"
              >
                <i className="fab fa-apple mr-2"></i>
              </a>
            </Col>
            {/* <Col className="contact-booking mt-2 pb-3" md={12}>
              <small>
                <a style={{color: "black"}} className="mr-2" href="mailto:thegrinns@gmail.com">
                  contact
                </a>
                <small className="text-black"> | </small>
                <a style={{color: "black"}} className="ml-2" href="mailto:dboyle@apa-agency.com">
                  booking
                </a>
              </small>
            </Col> */}
          </Row>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default Footer;
