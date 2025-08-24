import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Vedavyas</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} V</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Vedavyas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vedavyas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vedavyas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            {/* Gmail */}
            <li className="social-icons">
              <a
                href="mailto:vedavyasnarra@gmail.com"
                style={{ color: "white" }}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
