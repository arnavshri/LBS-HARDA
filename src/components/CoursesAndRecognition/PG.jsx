import { React, useEffect } from "react";
import $ from "jquery";

function PG() {
  useEffect(() => {
    $("#pgi").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#pg").offset().top,
        },
        1000
      );
    });

    $("#msci").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#msc").offset().top,
        },
        1000
      );
    });

    $("#mcomi").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#mcom").offset().top,
        },
        1000
      );
    });
  }, []);

  return (
    <>
      {/* <PGModals /> */}
      <div className="courses">
        <div className="row">
          <div
            className="col-4 cource"
            id="pgi"
            // data-toggle="modal"
            // data-target="#mpg"
          >
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_1_arzang.png" alt="" />
            <h2>P.G Diploma</h2>
          </div>
          <div
            className="col-4 cource"
            id="msci"
            // data-toggle="modal"
            // data-target="#mmsc"
          >
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_2_itgo5t.png" alt="" />
            <h2>M.Sc</h2>
          </div>
          <div
            className="col-4 cource"
            id="mcomi"
            // data-toggle="modal"
            // data-target="#mmcom"
          >
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_7_xe8of1.png" alt="" />
            <h2>M.Com</h2>
          </div>
          <div
            className="col-4 cource"
            id="mcomi"
            // data-toggle="modal"
            // data-target="#mmcom"
          >
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_4_hjl1it.png" alt="" />
            <h2>M.S.W</h2>
          </div>
          <div
            className="col-4 cource"
            id="mcomi"
            // data-toggle="modal"
            // data-target="#mmcom"
          >
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_5_lfnsol.png" alt="" />
            <h2>B.Lib</h2>
          </div>
        </div>
      </div>

      <div className="coursesBrief">
        <div id="mpg">
          <div className="courceBrief" id="pg">
            <h1>Post Graduate Diploma</h1>
            <p>
              PGDCA is a 1 year post graduate diploma course that majorly
              focusses on imparting theoretical as well as practical knowledge
              on Computer Science and Computer Applications to its students.
              PGDCA Full form is Post Graduate Diploma in Computer Application.
            </p>
            <p>
              PGDCA Admissions across top PGDCA Colleges such as Madras
              Christian College, NIMS University etc are usually done on the
              basis of merit. However, certain Colleges like ISI Kolkata, Jamia
              Millia Islamia etc grant admission on the basis of entrance exams.
            </p>
            <ul>
              <li>PGDCA</li>
            </ul>
          </div>
        </div>

        <div id="mmcom">
          <div className="courceBrief" id="mcom">
            <h1>Master of Commerce</h1>

            <p>
              M.Com full form Masters of commerce is a 2 years postgraduate
              course for candidates who want to pursue a careers in accounting,
              banking, investment, financial service, investment as well as
              economics and marketing.{" "}
            </p>
            <p>
              MCom course allows the students to work in almost all the sectors
              of the economy and remains one of the most versatile Courses in
              India. The insurance sector, one of the main sectors that employs
              MCom graduates of the economy, is expected to reach USD 1 Trillion
              by 2025, thus generating new jobs for the MCom graduates.
            </p>

            <ul>
              <li>Accounts</li>
              <li>Management</li>
            </ul>
          </div>
        </div>

        <div id="mmsc">
          <div className="courceBrief" id="msc">
            <h1>Master of Science</h1>

            <p>
              MSc, full form Master of Science, is a 2 years PG course, aimed at
              candidates who want to excel and make a career in the field of
              science and academics.
            </p>
            <p>
              MSc Courses are offered in most of the best colleges in India with
              specializations in Physics, Chemistry, Biology, Botany, Maths etc.{" "}
            </p>
            <p>
              MSc admission 2021 is granted through both merit and entrance
              exams. Some of the most popular MSc entrance exams in India are
              BITSAT, JNUEE, TISS NET, etc.
            </p>

            <ul>
              <li>Computer Science</li>
              <li>Physics</li>
              <li>Mathematics</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PG;
