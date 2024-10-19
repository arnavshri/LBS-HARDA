import React,{useEffect} from "react";
import VisibilitySensor from "react-visibility-sensor";
import "../../Style/CoursesAndRecognition/TeacherCourses.scss";
import $ from "jquery";

function Other() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="coursesBrief">
      <div className="courceBrief">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1>Audit Report 20-21</h1>
        </VisibilitySensor>
        <ul>
          <div
            data-toggle="modal"
            data-target="#three"
            style={{ cursor: "pointer" }}
          >
            <li>
              Balance Sheet as on the last date of the financial year{" "}
              <i className="fas fa-file-pdf mx-2 d-inline"></i>
            </li>
          </div>

          <li>
            Income and expenditure as on the last date of the financial year{" "}
            <i className="fas fa-file-pdf mx-2 d-inline"></i>
          </li>
          <li>
            Recipt and payment as on the last date of the financial year{" "}
            <i className="fas fa-file-pdf mx-2 d-inline"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Other;
