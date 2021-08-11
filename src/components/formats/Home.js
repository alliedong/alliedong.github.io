import React from 'react';
import { Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AllieHomeImage from "../../images/AllieHomeImage.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page-container" id="home-id">
      <Row className="home-as-row">
        <Col xs={12} md={8}>
          <div className="hello-message">
            <h2 id="hello-message">Hello and Welcome! I'm</h2>
          </div>
          <div className="name-typed">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Allie Dong")
                  .callFunction(() => {})
                  .start();
              }}
            />
          </div>
          <div className="home-greeting">
            Nice to meet you!
            <Row className="resume-button">
              <button
                className="resume-button-homepage"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                path="../../images/alliedong_resume.pdf"
              >
                Resume
              </button>
            </Row>
          </div>
        </Col>
        <Col xs={8} md={4}>
          <Image
            id="AlliePicture1"
            src={AllieHomeImage}
            alt="Some pics of myself"
          />
        </Col>
      </Row>
    </div>
  );
  }

export default Home
