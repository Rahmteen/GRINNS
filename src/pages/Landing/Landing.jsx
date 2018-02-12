import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";


import Assets from "../../components/Assets";
import axios from "axios";

const Landing = () => {
  return (
    <Container className="landing-container p-4">
        <Row>
          <Col className="text-center" md={12}>
              NAV BAR HERE
          </Col>
        </Row>
    </Container>
  );
};

export default Landing;


// LC_ALL=C GIT_COMMITTER_DATE="Mon Feb 12 14:00 2018 +0100" git commit --amend --no-edit --date "Mon Feb 12 14:00 2018 +0100"