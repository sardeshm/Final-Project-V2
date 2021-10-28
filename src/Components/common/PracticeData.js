import React, { useState } from "react";
import file from "../common/Dottedalphabet.pdf";
import { Document, Page, pdfjs } from "react-pdf";

const PracticeData = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page{pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PracticeData;
