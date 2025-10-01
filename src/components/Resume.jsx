import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const education = [
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    period: "2024 - Present",
    institution: "Swarrnim Startup & Innovation University, Gandhinagar, Gujarat - 382010",
    description: "Currently pursuing B.Sc. IT with a focus on full-stack development, programming, and modern technologies."
  },
  {
    degree: "Higher Secondary Certificate (12th - HSC)",
    period: "March 2024",
    institution: "The Deepak High School, Amreli, Gujarat - 365601",
    description: "Completed 12th in Science stream with an A2 grade."
  },
  {
    degree: "Secondary School Certificate (10th - SSC)",
    period: "March 2022",
    institution: "The Deepak High School, Amreli, Gujarat - 365601",
    description: "Completed 10th with an A2 grade."
  }
];

  const experience = [
    {
      position: 'Full Stack Developer ',
      period: 'Otc 2025 - Present',
      company: 'Red And White Skiil Education Pvt Ltd',
      description: 'I completed professional training at Red & White, gaining hands-on experience and practical skills in a real-world work environment, which strengthened my understanding of industry practices and teamwork'
    },
   
  ];

  return (
    <section id="resume" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">RESUME</div>
        
        <Row className='px-3'>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="resume-section">
  <div className="resume-header">
    <FaGraduationCap className="resume-icon" />
    <h3 className="resume-title">Education</h3>
  </div>
  
  <div className="timeline">
    {education.map((item, index) => (
      <div className="timeline-item" key={index} data-aos="fade-left">
        <div className="timeline-dot"></div>
        <Card className="timeline-card">
          <Card.Body>
            <h5 className="timeline-degree text-primary-custom">{item.degree}</h5>
            <p className="timeline-period">{item.period}</p>
            <h6 className="timeline-institution">{item.institution}</h6>
            <p className="timeline-description">{item.description}</p>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</div>
          </Col>
          
          <Col lg={6}>
            <div className="resume-section">
              <div className="resume-header">
                <FaBriefcase className="resume-icon" />
                <h3 className="resume-title">Certification</h3>
              </div>
              
              <div className="timeline">
                {experience.map((item, index) => (
                  <div className="timeline-item" key={index} data-aos="fade-left">
                    <div className="timeline-dot"></div>
                    <Card className="timeline-card">
                      <Card.Body>
                        <h5 className="timeline-degree text-primary-custom">
                          {item.position}
                        </h5>
                        <p className="timeline-period">{item.period}</p>
                        <h6 className="timeline-institution">{item.company}</h6>
                        <p className="timeline-description">{item.description}</p>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;