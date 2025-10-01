import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 94274 29266',
      link: 'tel:+919427429266'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'solankiparth94274@gmail.com',
      link: 'solankiparth94274@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: 'Amreli ,Gujarat - 365601',
      link: 'https://www.google.com/maps/place/Batar+Wadi,+Amreli,+Gujarat+365601/@21.5961443,71.2113459,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x395880c72d516845:0x4e950cffb505bb12!2sAmreli,+Gujarat+365601!3b1!8m2!3d21.6015242!4d71.2203555!16zL20vMDhzXzM0!3m5!1s0x395880eaad0a91d3:0x88b421957fd6140b!8m2!3d21.5961444!4d71.2162115!16s%2Fg%2F11g5_xpwdw?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section id="contact" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">CONTACT</div>
        
        <Row className='px-3' >
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <div className="contact-info">
              <h3 className="contact-heading">Get In Touch</h3>
              <p className="contact-description">
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <Card className="contact-item" key={index}>
                    <Card.Body className="d-flex align-items-center">
                      <div className="contact-icon">
                        <item.icon />
                      </div>
                      <div className="contact-details">
                        <h6 className="contact-title">{item.title}</h6>
                        <a 
                          href={item.link} 
                          className="contact-value"
                          onClick={item.link === '#' ? (e) => e.preventDefault() : undefined}
                        >
                          {item.value}
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Body>
                <h4 className="form-title text-center mb-4">Send Me A Message</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button type="submit" className="btn-send-message">
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;