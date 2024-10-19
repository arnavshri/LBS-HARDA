import React from 'react'

function PGModals() {
    return (
        <div className="coursesBrief">
        <div
          className="modal fade"
          id="mpg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="courceBrief" id="pg">
                <h1>Post Graduate Diploma</h1>
                <p>
                  PGDCA is a 1 year post graduate diploma course that majorly
                  focusses on imparting theoretical as well as practical
                  knowledge on Computer Science and Computer Applications to its
                  students. PGDCA Full form is Post Graduate Diploma in Computer
                  Application.
                </p>
                <p>
                  PGDCA Admissions across top PGDCA Colleges such as Madras
                  Christian College, NIMS University etc are usually done on the
                  basis of merit. However, certain Colleges like ISI Kolkata,
                  Jamia Millia Islamia etc grant admission on the basis of
                  entrance exams.
                </p>
                <ul>
                  <li>PGDCA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="mmcom"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="courceBrief" id="mcom">
                <h1>Master of Commerce</h1>

                <p>
                  M.Com full form Masters of commerce is a 2 years postgraduate
                  course for candidates who want to pursue a careers in
                  accounting, banking, investment, financial service, investment
                  as well as economics and marketing.{" "}
                </p>
                <p>
                  MCom course allows the students to work in almost all the
                  sectors of the economy and remains one of the most versatile
                  Courses in India. The insurance sector, one of the main
                  sectors that employs MCom graduates of the economy, is
                  expected to reach USD 1 Trillion by 2025, thus generating new
                  jobs for the MCom graduates.
                </p>

                <ul>
                  <li>Accounts</li>
                  <li>Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="mmsc"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="courceBrief" id="msc">
                <h1>Master of Science</h1>

                <p>
                  MSc, full form Master of Science, is a 2 years PG course,
                  aimed at candidates who want to excel and make a career in the
                  field of science and academics.
                </p>
                <p>
                  MSc Courses are offered in most of the best colleges in India
                  with specializations in Physics, Chemistry, Biology, Botany,
                  Maths etc.{" "}
                </p>
                <p>
                  MSc admission 2021 is granted through both merit and entrance
                  exams. Some of the most popular MSc entrance exams in India
                  are BITSAT, JNUEE, TISS NET, etc.
                </p>

                <ul>
                  <li>Computer Science</li>
                  <li>Physics</li>
                  <li>Mathematics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PGModals
