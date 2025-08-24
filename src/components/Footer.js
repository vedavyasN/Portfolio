import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
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
                href="mailto:vedavyasnarra@gmail.com" 
                style={{ color: "white" }}
                onClick={(e) => {
                  // 🚨 Added custom behavior for mobile users
                  if (/Mobi|Android/i.test(navigator.userAgent)) {
                    // On mobile → use "mailto:" directly (opens Gmail app / default mail app)
                    window.location.href = "mailto:vedavyasnarra@gmail.com";
                  } else {
                    // On desktop → open Gmail compose window in new tab
                    e.preventDefault();
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=vedavyasnarra@gmail.com",
                      "_blank"
                    );
                  }
                }}
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
