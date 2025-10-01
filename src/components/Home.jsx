import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <Container fluid>
        <Row className="align-items-center min-vh-100" >
          
          <Col lg={12}>
            <div className="home-content text-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <h1 className="home-title">
                Hi, I am <span className="text-primary-custom">Parth Solanki</span>
              </h1>
              <div className="home-description">
                <p className="lead">
                  I am a Full Stack web developer. I can provide clean code and pixel perfect design.
                </p>
                <p className="lead">
                  I also make website more & more interactive with web animations.
                </p>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/Sparth2296" className="social-link" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/parth-solanki-7a611231b/" className="social-link" title="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
              
              {/* <div className="scroll-indicator">
                <div className="mouse">
                  <div className="scroll"></div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;