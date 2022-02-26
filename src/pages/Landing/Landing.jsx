import React from "react";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import MerchBar from "../../components/MerchBar/MerchBar.jsx";
import shows_2022 from "../../../assets/data/shows_2022.js";
import lgo_cover from "/public/lgo_cover.jpg";
import conan_cover from "/public/conan_cover.jpg";

const Landing = () => {
  console.table(shows_2022);
  return (
    <>
      <Container className="landing-music py-5" fluid>
        <Container className="">
          <Row>
            <Col
              style={{ fontSize: "1.4em" }}
              className="landing-header mb-2 px-0 sm-text-left"
              md={12}
            >
              NEW RELEASES
            </Col>
          </Row>
          <Row className="px-0 text-center">
            <Col className="merch-card my-1 card-shadow px-0 mx-auto" md={12}>
              <img
                className=""
                variant="top"
                width="100%"
                height="150px"
                src={conan_cover}
                style={{ objectFit: "cover" }}
                alt="GRINNS red tee"
              />
            </Col>
            <Col className="px-0">
              <small>THE GRINNS - CONAN O'BRIEN</small>
              <br />
              <p style={{ fontSize: "0.8em" }}>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  href="https://open.spotify.com/album/1bFhezj184KJYWk3xkrpbF?si=e65fb91d716c480a"
                >
                  <i className="fab fa-spotify pr-2"></i>
                </a>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  href="https://music.apple.com/us/album/conan-obrien/1609979835?i=1609979838"
                >
                  <i className="fab fa-apple pr-1"></i>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  className=""
                  target="_blank"
                  href="https://ffm.to/conanobrien"
                >
                  {" "}
                  ...{" "}
                </a>
              </p>
            </Col>
          </Row>{" "}
        </Container>
      </Container>
      <Container className="landing-container py-5" fluid>
        <Container className="">
          <Row>
            <Col
              style={{ fontSize: "1.4em" }}
              className="landing-header mb-2 px-0"
              md={12}
            >
              UPCOMING SHOWS
            </Col>
          </Row>
          <Row className="p-0">
            {shows_2022 &&
              shows_2022.map((show) => {
                return (
                  <>
                    <Container
                      style={{
                        backgroundColor: show?.alert ? "indianred" : "#faebd7",
                      }}
                      className="my-2 show-card px-0"
                      xs={12}
                    >
                      <Row className="">
                        <Col className="" md={6}>
                          <Image width="55px" className="p-2" src={lgo_cover} />{" "}
                          {show.city} @ {show.venue}
                        </Col>
                        <Col className="text-right ml-n3 my-auto mb-2" md={6}>
                          <a style={{ color: 'black'}} href={show.link} target="_blank"><i class="fa-solid fa-ticket pb-1"></i>
                        </a>
                        </Col>
                      </Row>
                    </Container>
                    {show?.alert && (
                      <>
                        <br />
                        <p
                          className="my-auto mb-1 text-right"
                          style={{ color: "indianred", fontSize: "0.7em" }}
                        >
                          {" "}
                          <i class="fa-solid fa-triangle-exclamation pr-1"></i>
                          {show.alert}
                        </p>
                      </>
                    )}
                  </>
                );
              })}
          </Row>
        </Container>
      </Container>
      <Container className="landing-merch pt-5 pb-3" fluid>
        <Container className="">
          <Row>
            <Col
              style={{ fontSize: "1.4em" }}
              className="landing-header mb-2 px-0"
              md={12}
            >
              FEATURED MERCH
            </Col>
          </Row>
          <Row>
            <MerchBar />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Landing;
