import { Button } from 'bootstrap';
import React from 'react';
import {Row, Col, Image} from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AboutMePhoto from '../../images/AboutMePhoto.png'

function Home() {
  return (
    <div className='home-page' id='home-id'>
      <Row className="home-as-row">
        <Col xs={8} md={4}>
          <div className="home"> Hello! I am </div>
          <div className="name-typed">
            {" "}
            <Typewriter onInit={(typewriter) => {
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
              <Button
              className='resume-button-homepage'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              >
                Resume
              </Button>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Image id="AlliePicture1" src={AboutMePhoto} alt="Some pics of myself"/>
        </Col>
      </Row>
    </div>
  );
  }

export default Home
