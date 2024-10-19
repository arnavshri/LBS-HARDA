import { React, useEffect } from "react";
import "../../Style/CoursesAndRecognition/TeacherCourses.scss";
import $ from "jquery";
import TCModal from "./TCModal";
import VisibilitySensor from "react-visibility-sensor";

function TeacherCourses() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    $("#bedi").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#bed").offset().top,
        },
        1000
      );
    });

    $("#deledi").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#deled").offset().top,
        },
        1000
      );
    });
  }, []);

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  return (
    <div className="tc">
      <TCModal />
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <div className="headingcontainer">
          <h3>Teacher’s Training Courses</h3>
        </div>
      </VisibilitySensor>

      <div id="recognization">
        <span>
          Recognized by Department of Higher Education, Bhopal & affiliated by
          Barkatullah University, Bhopal
        </span>
        <span>(College Timings Teacher’s Training : 11.30 AM to 05.00 PM)</span>
      </div>

      <div className="courses">
        <div className="row">
          <div className="col-6 cource" id="bedi">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914191/Group_10_bs07ti.png" alt="img1" />
            <h2>B.Ed.</h2>
          </div>
          <div className="col-6 cource" id="deledi">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914191/Group_8_uew3jl.png" alt="" />
            <h2>D.El.Ed</h2>
          </div>
        </div>
      </div>

      <div className="coursesBrief">
        <div className="courceBrief">
          <h1>Department of Teacher’s Education</h1>
          <ul>
            <div
              data-toggle="modal"
              data-target="#three"
              style={{ cursor: "pointer" }}
            >
              <li>
                Society Registration Certificate{" "}
                <i className="fas fa-file-pdf mx-2 d-inline"></i>
              </li>
            </div>

            <div
              data-toggle="modal"
              data-target="#officeBearer"
              style={{ cursor: "pointer" }}
            >
              <li>
                List Of Office Bearers{" "}
                <i className="fas fa-file-pdf mx-2 d-inline"></i>
              </li>
            </div>

            <li>
              Attested Stamp Paper NCTE Regulation 2014{" "}
              <i className="fas fa-file-pdf mx-2 d-inline"></i>
            </li>
          </ul>
        </div>

        <div className="main-cources-brief">
          <div className="courceBrief" id="bed">
            <h1>Bachelor of Education(B.Ed)</h1>

            <div className="my-2">
              <p>
                Recognized by Department of Higher Education, Bhopal &
                affiliated by Barkatullah University, Bhopal
              </p>
            </div>

            <p>
              <b> NCTE Order No. :</b>WRC/5-6/223170/61(scm)/2004/3712.
            </p>
            <p>
              <b> Date :</b>16/12/2004
            </p>
            <p>
              <b> NCTE Order No. :</b>WRC/APW00628/223170/2015/146365
            </p>
            <p>
              <b> Date :</b>31/05/2015
            </p>
            <p>
              <b>Annual Intake :</b>100(two basic units of 50 students each)
            </p>
            <p>
              <b>Mandatory Disclosures :</b>
            </p>

            <ul>
              <div
                data-toggle="modal"
                data-target="#four"
                style={{ cursor: "pointer" }}
              >
                <li>
                  NCTE Recognition Letter
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#five"
                style={{ cursor: "pointer" }}
              >
                <li>
                  NCTE Recognition Letter(Revised)
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#one"
                style={{ cursor: "pointer" }}
              >
                <li>
                  BU Affiliation for the Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#six"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Letter OF Fees Fixation Committee for The Session 2020-2021 to
                  2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#teacherStaffBEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Teaching Staff Profile for Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#NTStaffBEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Non Teaching Staff Profile
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

    
              <div
                data-toggle="modal"
                data-target="#AdmittedStudentsBEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  List OF Admitted Students for the Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>
            </ul>
          </div>

          <div className="vl"></div>

          <div className="courceBrief" id="deled">
            <h1>Diploma in Elementary Education(D.El.Ed.)</h1>

            <div className="my-2">
              <p>
                Recognized by NCTE, New Delhi and affiliated by Board of
                Secondary Education, Bhopal
              </p>
            </div>

            <p>
              <b> NCTE Order No. :</b>WRC/5-6/92/2006/C-5684.
            </p>
            <p>
              <b> Date :</b>04/01/2007
            </p>
            <p>
              <b>Annual Intake :</b>50
            </p>
            <p>
              <b> NCTE Order No. :</b>WRC/NCTE/APP2633/244TH/D.El.Ed.[Increase
              in Intake]/&#123; M.P.&#125;/2016/162442
            </p>
            <p>
              <b> Date :</b>03/03/2016
            </p>
            <p>
              <b>Annual Intake :</b>50 (Additional) From the Session 2016-17,
              College has recognition for 2 basic unit of D.El.Ed. i.e. 100
              Seats.
            </p>

            <div>
              <p>
                <b>Mandatory Disclosures :</b>
              </p>
            </div>

            <ul>
              <div
                data-toggle="modal"
                data-target="#eight"
                style={{ cursor: "pointer" }}
              >
                <li>
                  NCTE Recognition Letter
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#seven"
                style={{ cursor: "pointer" }}
              >
                <li>
                  NCTE Recognition letter for Additional Intake
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <div
                data-toggle="modal"
                data-target="#two"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Board of Secondary Education Affiliation for Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>

              <li>
                Fees Of The Course
                <i className="fas fa-file-pdf mx-2 d-inline"></i>
              </li>
              <div
                data-toggle="modal"
                data-target="#pdfTeacherStaffDELEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Teaching Staff Profile for Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>
              <div
                data-toggle="modal"
                data-target="#NTStaffDElEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  Non Teaching Staff Profile
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>
              <div
                data-toggle="modal"
                data-target="#AdmittedStudentsDElEd"
                style={{ cursor: "pointer" }}
              >
                <li>
                  List OF Admitted Students for the Session 2022-2023
                  <i className="fas fa-file-pdf mx-2 d-inline"></i>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCourses;
