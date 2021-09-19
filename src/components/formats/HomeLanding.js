import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AllieHomeImage from "../../images/AllieHomeImage.png";
import Button from "./Button.js";
import "../styles/Button.css";

function HomeLanding() {
  return (
    <Container fluid className="home-page-container">
      <div className="home-as-row">
        <div style={{ width: "100%" }}>
          <div className="hello-message">
            <h2>Hi there! I'm Allie</h2>
            <br></br>
            <h6>Currently a UWaterloo student pursuing </h6>
            <div className="program-typed">
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
              Welcome, and thanks for visiting!
            </div>
            <Row className="resume-button">
              <Button
                className="resume-button-homepage"
                buttonStyle="btn--primary"
                resume="https://drive.google.com/file/d/1GV-zUtW9k5XxJHCxev_w5ePexCbZqa7x/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
            </Row>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Image
            id="AlliePicture1"
            src={AllieHomeImage}
            alt="Personal profile design"
            style={{ marginRight: "60px" }}
          />
        </div>
      </div>
    </Container>
  );
}

export default HomeLanding;
