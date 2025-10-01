import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';

import './Services.css';

const Services = () => {
  const services = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'Building scalable and secure web applications with both frontend and backend integration.'
  },
  {
    icon: FaLaptopCode,
    title: 'Frontend Development',
    description: 'Crafting responsive and user-friendly interfaces using React, JavaScript, HTML, and CSS.'
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description: 'Developing powerful server-side applications with Node.js, Express, and MongoDB.'
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    description: 'Designing and managing databases with MongoDB, and Firebase for efficient data handling.'
  },
  {
    icon: FaMobileAlt,
    title: 'API Integration',
    description: 'Creating and integrating RESTful APIs to connect frontend and backend seamlessly.'
  },
  {
    icon: FaCloud,
    title: 'Deployment & Hosting',
    description: 'Deploying projects on cloud platforms like Vercel, and Netlify for smooth performance.',
    featured: false
  }

  ];

  return (
    <section id="services" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">SERVICE</div>
        
        <Row className='px-3'>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index} data-aos="zoom-out">
              <Card className={`service-card h-100 ${service.featured ? 'featured' : ''}`}>
                <Card.Body className="text-center p-4">
                  <div className="service-icon">
                    <service.icon size={40} />
                  </div>
                  <Card.Title className="service-title">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;