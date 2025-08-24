import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/vedavyasN_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Required for pdf.js to work
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200); // for scaling
  const [numPages, setNumPages] = useState(null); // total pages
  const [currentPage, setCurrentPage] = useState(1); // ✅ track which page is visible

  const containerRef = useRef(null); // ✅ reference for scrolling container

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // When PDF loads successfully
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // ✅ detect which page is visible on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;
      const pageHeight = clientHeight; // assume each page ~ viewport height
      const page = Math.min(
        numPages,
        Math.max(1, Math.round(scrollTop / pageHeight) + 1)
      );
      setCurrentPage(page);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [numPages]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ✅ Scrollable container */}
        <Row
          className="resume"
          style={{
            maxHeight: "90vh", // fit within viewport
            overflowY: "scroll",
            position: "relative",
          }}
          ref={containerRef}
        >
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {/* Render all pages, but only one fits the screen at a time */}
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
              >
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.5 : 0.6}
                />
              </div>
            ))}
          </Document>

          {/* ✅ Page indicator at bottom right */}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          >
            {currentPage}/{numPages}
          </div>
        </Row>

        {/* Download CV Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
