import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf1 from "../../PDF/BEd. 21-22.pdf";
import pdf2 from "../../PDF/TC/DELED22-23.pdf";
import pdf3 from "../../PDF/TC/01 Samiti Registration Certificate VSS.pdf"
import pdf4 from "../../PDF/TC/B Ed NCTE Recognition Letter.pdf"
import pdf5 from "../../PDF/TC/BEd. NCTE Recognition Letter(Revised) NCTE Recognition 2015 P1.pdf"
import pdf6 from "../../PDF/TC/Letter OF Fees Fixation Committee for The Session 2020-221 to 2022-2023.pdf"
import pdf7 from "../../PDF/TC/Recognition D.El.Ed. (Additional Intake) WRCNCTEAPP2633244THD.EL.ED.[Increase in Intake]{ M.P.}2016162442.pdf"
import pdfBearer from "../../PDF/TC/officeBearers.pdf"
import pdfTeacherStaffBEd from "../../PDF/TC/B.Ed. Teaching-staff-profile.pdf"
import pdfTeacherStaffDELEd from "../../PDF/TC/D.El.Ed. Teachers List.pdf"
import pdf8 from "../../PDF/TC/NCTE Recognition Letter D.El.Ed. WRC5-6922006C-5684.pdf"
import NTStaffDElEd from "../../PDF/TC/Document 385.pdf"

function TCModal() {
  return (
    <div>
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
            <Document file='https://res.cloudinary.com/lbs-harda/image/upload/v1659599178/B._Ed._Affilation_22-23_kzelhw.pdf' options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
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
            <Document file={pdf2} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
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
            <Document file={pdf3} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
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
            <Document file={pdf4} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
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
            <Document file={pdf5} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
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
            <Document file={pdf6} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(3), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="seven"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={pdf7} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="officeBearer"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={pdfBearer} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="NTStaffDElEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={NTStaffDElEd} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      {/* Modal for NT Staff BEd */}
      <div
        className="modal fade"
        id="NTStaffBEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file='https://res.cloudinary.com/lbs-harda/image/upload/v1659000645/NTStaffBEd_1_cfyyi6.pdf' options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="AdmittedStudentsBEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file='https://res.cloudinary.com/lbs-harda/image/upload/v1659599677/BEd_1_kor8vq.pdf' options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="AdmittedStudentsDElEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file='https://res.cloudinary.com/lbs-harda/image/upload/v1659599827/DElEd_dmapqp.pdf' options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(1), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="teacherStaffBEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={pdfTeacherStaffBEd} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(4), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="pdfTeacherStaffDELEd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={pdfTeacherStaffDELEd} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(5), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>



      <div
        className="modal fade"
        id="eight"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Document file={pdf8} options={{ workerSrc: "/pdf.worker.js" }}>
              {Array.from(new Array(2), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TCModal;
