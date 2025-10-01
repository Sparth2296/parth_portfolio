import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'A2AI Creation',
      category: 'E-commerc Website',
      image: '/Screenshot (20).png',
      description: 'A2AI Creation is a modern React + CSS web app built for selling handcrafted statues. It offers a clean, responsive design with smooth browsing and detailed product views for an elegant shopping experience.',
      technologies: ['CSS', 'JavaScript', 'React'],
      link: 'https://a2-ai-creation.vercel.app/'
    },
    {
      id: 2,
      title: 'Cretificete Distribute Website',
      category: 'website',
      image: '/Screenshot (21).png',
      description: 'A Certificate Distribution website built with HTML, CSS, and JavaScript that allows users to easily generate and access digital certificates. It features a simple, responsive design for smooth certificate verification and download.',
      technologies: ['HTML' , 'CSS' , 'JavaScript'],
      link: 'https://cretificate-distribute-deepak.vercel.app/'
    },
    {
      id: 3,
      title: 'School Management System',
      category: 'LMS System',
      image: '/Screenshot (26).png',
      description: 'A modern Learning Management System built with React and React-Bootstrap, designed for seamless course management and student engagement. It offers a responsive, user-friendly UI for both learners and admins.',
      technologies: ['React', 'React-Bootstrap'],
      link: 'https://lmstemplate.vercel.app/'
    },
    {
      id: 4,
      title: 'Air Jordan',
      category: 'Ecommerce WEbsite',
      image: '/Screenshot (27).png',
      description: 'This Air Jordan website is a sleek and modern sneaker showcase built using React and Bootstrap. It highlights the latest Jordan collections with a responsive design, smooth navigation, and stylish layouts. Users can explore sneakers with an attractive UI that’s fast, clean, and mobile-friendly.',
      technologies: ['React', 'React-Bootstrap'],
      link: 'https://jordan-template.vercel.app/'
    },
    {
      id: 5,
      title: 'Claculater ',
      category: 'Calculater Tamplet',
      image: '/Screenshot (28).png',
      description: 'This Calculator project is built using HTML, CSS, and JavaScript, providing basic arithmetic operations like addition, subtraction, multiplication, and division. The design is clean and responsive, styled with CSS for a modern look, while JavaScript handles the real-time calculations and interactive functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://javascript-calculater-bay.vercel.app/'
    },
    {
      id: 6,
      title: 'Corona API Projects',
      category: 'API Project',
      image: '/Screenshot (30).png',
      description: 'This Quran API project is developed using HTML, CSS, and JavaScript, allowing users to fetch and explore verses directly from a Quran API. It features a simple and responsive interface styled with CSS, while JavaScript manages the API requests, data display, and interactive user experience.',
      technologies: ["HTML" , "CSS" , "JavaScript"],
      link: 'https://javascript-api-project.vercel.app/'
    }
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="portfolio" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">PROJECTS</div>
        
        <Row className='px-3'>
          {projects.map((project) => (
            <Col lg={4} md={6} className="mb-4 " key={project.id} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <Card className="portfolio-card h-100">
                <div className="portfolio-image">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="portfolio-overlay">
                    <Button 
                      variant="link" 
                      className="portfolio-btn"
                      onClick={() => handleShowModal(project)}
                    >
                      <FaEye />
                    </Button>
                    <Button 
                      variant="link" 
                      className="portfolio-btn"
                      href={project.link}
                      target="_blank"
                    >
                      <FaExternalLinkAlt />
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="portfolio-title">
                    {project.title}
                  </Card.Title>
                  <p className="portfolio-category">{project.category}</p>
                  <Card.Text className="portfolio-description">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Portfolio Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        className="portfolio-modal"
        centered
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="img-fluid mb-3"
              />
              <p><strong>Category:</strong> {selectedProject.category}</p>
              <p><strong>Description:</strong> {selectedProject.description}</p>
              <p><strong>Technologies:</strong> {selectedProject.technologies.join(', ')}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button 
                className="btn-primary-custom" 
                href={selectedProject.link}
                target="_blank"
              >
                View Project
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;