import React, { useState, useEffect } from "react";
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
  const [width, setWidth] = useState(1200); // to control scaling of PDF
  const [numPages, setNumPages] = useState(null); // ✅ new: store total pages of PDF

  useEffect(() => {
    setWidth(window.innerWidth); // set width based on screen size
  }, []);

  // ✅ new: this runs when PDF is loaded
  // it gives us how many pages are inside the PDF
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ✅ Changed this part */}
        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess} // load total pages
            className="d-flex flex-column align-items-center"
          >
            {/* ✅ Instead of showing only page 1,
                we loop through all pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}       // unique key
                pageNumber={index + 1}          // show page 1, 2, 3... automatically
                scale={width > 786 ? 1.5 : 0.6} // scaling for desktop / mobile
              />
            ))}
          </Document>
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
