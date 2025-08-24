import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,   
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Intro Section */}
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: "2.6em" }}>
             <span style={{ color: "#ffffff" }}>LET ME</span>{" "}
             <span className="purple">INTRODUCE</span>{" "}
             <span style={{ color: "#ffffff" }}>MYSELF</span>
            </h1>
<p className="home-about-body" style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
  <span style={{ color: "white", fontWeight: "500" }}>
    I’m Vedavyas, a passionate final-year student specializing in{" "}
  </span>
  <b className="purple" style={{ fontSize: "1.15rem" }}>Artificial Intelligence</b>
  <span style={{ color: "white", fontWeight: "500" }}> & </span>
  <b className="purple" style={{ fontSize: "1.15rem" }}>Machine Learning</b>
  <span style={{ color: "white" }}> – turning data into meaningful insights and smart solutions.</span>
</p>


          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vedavyasN"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/vedavyas-n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vedavyas_narra.06/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
               <a
                  href={
                    isMobile
                      ? "mailto:vedavyasnarra@gmail.com" // On mobile → opens Gmail app
                      : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vedavyasnarra@gmail.com" // On desktop → opens Gmail web compose
                  }
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
