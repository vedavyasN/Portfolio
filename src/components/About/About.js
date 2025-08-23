import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading">
            My <strong className="purple">Highlights</strong>
          </h1>
          <ul style={{ textAlign: "left", maxWidth: "600px", fontSize: "1.1rem" }}>
            <li>🏆 Placed in Top 5 at a National Level Hackathon</li>
            <li>🎓 B.Tech in Artificial Intelligence & Machine Learning (BITM College)</li>
            <li>💻 Developed multiple projects using Flask, React, and Android</li>
            <li>📊 Final Year Project: Hate Speech Recognition using AI</li>
            <li>🌐 Freelance experience in web & app development</li>
          </ul>
        </Row>

      </Container>
    </Container>
  );
}

export default About;
