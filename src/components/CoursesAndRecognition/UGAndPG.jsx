import { React, useState,useEffect } from "react";
import "../../Style/CoursesAndRecognition/TeacherCourses.scss";
import PG from "./PG";
import UG from "./UG";
import $ from "jquery";
import VisibilitySensor from "react-visibility-sensor";

function UGAndPG() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [courses, setCourses] = useState(0);
  function handleUG() {
    setCourses(0);
    $("#1").removeClass("active");
    $("#0").addClass("active");
  }
  function handlePG() {
    setCourses(1);
    $("#0").removeClass("active");
    $("#1").addClass("active");
  }

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  return (
    <div className="tc">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <div className="headingcontainer">
          <h3>Under Graduation & Post Graduation Courses</h3>
        </div>
      </VisibilitySensor>

      <div id="recognization">
        <span>
          Recognized by Department of Higher Education, Bhopal & affiliated by
          Barkatullah University, Bhopal
        </span>
        <span>(College Timings Teacher’s Training : 11.30 AM to 05.00 PM)</span>
      </div>

      <div className="my-4" style={{ width: "95vw" }}>
        <button className="active" id="0" type="button" onClick={handleUG}>
          UG Courses
        </button>
        <button type="button" id="1" onClick={handlePG}>
          PG Courses
        </button>
      </div>

      {courses === 0 ? <UG /> : <PG />}
    </div>
  );
}

export default UGAndPG;
