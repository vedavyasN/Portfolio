import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/vedavyasN_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When PDF loads, get total pages
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Handle scroll to update current page number
  function handleScroll(e) {
    const pageHeight = e.target.scrollHeight / numPages;
    const currentPage = Math.ceil((e.target.scrollTop + pageHeight / 2) / pageHeight);
    setPageNumber(currentPage);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            position: "relative",
            height: "90vh", // Make it fit screen
            overflowY: "auto", // Scroll only inside this container
          }}
          onScroll={handleScroll}
        >
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.5 : 0.7} // Responsive scaling
              />
            ))}
          </Document>

          {/* Page number indicator (inside bottom-right of resume) */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "20px",
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            {pageNumber}/{numPages}
          </div>
        </Row>

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
