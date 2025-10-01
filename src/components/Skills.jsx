import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiJquery,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#2760B8" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  ];

  return (
    <section id="skills" className="section">
      <Container>
        <div className="section-title" data-aos="zoom-in">SKILLS</div>

        <Row className='px-3' data-aos="zoom-in">
          <Col lg={6}>
            <div className="skills-content">
              <h3 className="skills-heading">
                All the Skills I Have in This Field of Work
              </h3>
              <p className="skills-description">
                I started out with C programming, which really helped me build a solid base in logic and problem-solving. From there, I moved into web development with HTML5, CSS3, Bootstrap, and jQuery to create clean, responsive designs. I love working with JavaScript and React.js to bring ideas to life with smooth and interactive interfaces. On the backend side, I use Node.js and Express.js to build fast and scalable apps. For storing and managing data, I rely on MongoDB and Firebase, making sure everything runs securely and smoothly.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index} data-aos="zoom-in">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
