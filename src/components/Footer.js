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
          <h3>Designed and Developed by Vedavyas N</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/vedavyasN"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vedavyas-n"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/vedavyas_narra.06/?igsh=MXVkYmtha3I4ZDMwbg%3D%3D#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
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
  );
}

export default Footer;
