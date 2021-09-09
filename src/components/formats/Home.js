import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AllieHomeImage from "../../images/AllieHomeImage.png";
import "../styles/Home.css";

// xs={8} md={4}
// xs={12} md={8}

function Home() {
  return (
    <Container fluid className="home-page-container">
      <Row className="home-as-row">
        <Col xs={8} md={12}>
          <div className="hello-message">
            <h2>Hi there! I'm Allie :)</h2>
            <br></br>
            <h6>Currently pursuing: </h6>
            <div className="pursuance-typed">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Systems Design Engineering")
                    .callFunction(() => {})
                    .start();
                }}
              />
            </div>
            <div className="home-greeting">
              Welcome and thanks for visiting!
            </div>
            <Row className="resume-button">
              <button
                className="resume-button-homepage"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                href="https://drive.google.com/file/d/1GV-zUtW9k5XxJHCxev_w5ePexCbZqa7x/view?usp=sharing"
                target="_blank"
              >
                Resume
              </button>
            </Row>
          </div>
        </Col>
        <Col xs={4} md={8}>
          <Image
            id="AlliePicture1"
            src={AllieHomeImage}
            alt="Personal profile design"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
