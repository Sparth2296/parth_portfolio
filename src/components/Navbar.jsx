import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaUser, FaBriefcase, FaCode, FaFileAlt, FaFolder, FaEnvelope, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeSection, darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: FaHome },
    { id: 'about', label: 'ABOUT', icon: FaUser },
    { id: 'services', label: 'SERVICES', icon: FaBriefcase },
    { id: 'skills', label: 'SKILLS', icon: FaCode },
    { id: 'resume', label: 'RESUME', icon: FaFileAlt },
    { id: 'portfolio', label: 'PORTFOLIO', icon: FaFolder },
    { id: 'contact', label: 'CONTACT', icon: FaEnvelope }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className={`sidebar-nav ${darkMode ? 'dark' : 'light'}`} >
        <div className="profile-section">
          <div className="profile-image">
            <img 
              src="/IMG-20250320-WA0022 (2).jpg" 
              alt="Profile" 
            />
          </div>
        </div>
        
        <Nav className="flex-column nav-items">
          {navItems.map((item) => (
            <Nav.Link
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <item.icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Nav.Link>
          ))}
        </Nav>

        <div className="hire-me-section">
          <button className="btn-hire-me" onClick={() => scrollToSection('contact')}>
            Hire Me
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <BSNavbar 
        expand="lg" 
        fixed="top" 
        className={`mobile-nav ${darkMode ? 'dark' : 'light'}`}
        expanded={expanded}
      >
        <Container fluid>
          <BSNavbar.Brand className="brand">
            <img 
              src="/IMG-20250320-WA0022 (2).jpg" 
              alt="Profile" 
              className="brand-image"
            />
            <span className="brand-text">Portfolio</span>
          </BSNavbar.Brand>
          
          <BSNavbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="custom-toggler"
          >
            <FaBars />
          </BSNavbar.Toggle>

          
          
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <item.icon className="mobile-nav-icon" />
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </div>
  );
};

export default Navbar;