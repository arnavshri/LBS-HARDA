import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf1 from "./PDF/1.pdf";
import pdf2 from "./PDF/2.pdf";
import pdf3 from "./PDF/3.pdf";
import pdf4 from "./PDF/4.pdf";
import pdf5 from "./PDF/5.pdf";
import pdf6 from "./PDF/6.pdf";

function LnBModals() {
  return (
    <>
      <div
        className="modal fade"
        id="one"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf1}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(10), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="two"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf2}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(4), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="three"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf3}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(3), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="four"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf4}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="five"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf5}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="six"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document
              file={pdf6}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              {Array.from(new Array(2), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </>
  );
}

export default LnBModals;
