import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

const About = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/ParthSolankiCV.pdf`;
    link.download = "ParthSolankiCV.pdf";
    link.click();
  };


  return (
    <section id="about" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">ABOUT ME</div>

        <Row className="align-items-center about-row">
          <Col lg={6} className="mb-4">
            <div className="about-image" data-aos="flip-left">
              <img
                src="/IMG-20250320-WA0006.jpg"
                alt="About Me"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col lg={6} className="pe-4" data-aos="zoom-out-up">
            <div className="about-content px-sm-0">
              <h2 className="about-name">Hi There! I'm Parth Solanki</h2>
              <p className="about-role text-primary-custom">
                MERN Stack Developer
              </p>

              <p className="about-description">
                I’m a Full Stack Developer who enjoys creating modern,
                responsive, and user-friendly web applications. I like combining
                design and functionality to build smooth digital experiences
                that not only look good but also work efficiently. My goal is to
                create scalable solutions that make a real impact in the digital
                world.
              </p>

              <div className="about-details">
                <Row>
                  <Col sm={12}>
                    <div className="detail-item">
                      <span className="detail-label">Birthday</span>
                      <span className="detail-value">Sep 22, 2006</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone</span>
                      <span className="detail-value">+91 94274 29266</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Email</span>
                      <span className="detail-value">solankiparth94274@gmail.com</span>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className="detail-item">
                      <span className="detail-label">From</span>
                      <span className="detail-value">
                        Amreli, Gujarat - 365601
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Language</span>
                      <span className="detail-value">Gujarati, Hindi, English</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Freelance</span>
                      <span className="detail-value">Available</span>
                    </div>
                  </Col>
                </Row>
              </div>

               <Button className="btn-primary-custom mt-4" onClick={handleDownload}>
      Download CV
    </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
