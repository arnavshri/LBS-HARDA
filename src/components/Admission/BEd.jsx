import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/Admission/BEd.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function BEd() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="aboutHead BEd">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h1>About B.Ed</h1>
      </VisibilitySensor>
      <h4>
        "Teaching should be such that what is offered is perceived as a valuable
        gift and not as a hard duty."
      </h4>
      <div className="BEd-text">
        <p>
          A Bachelor of Education (B.Ed) is a undergraduate professional degree
          which prepares students for work as a teacher in schools, though in
          some countries additional work must be done in order for the student
          to be fully qualified to teach.
        </p>
        <p>
          Bachelor of Education(B.Ed) is a course offered for those interested
          in pursuing career in teaching. The B.Ed degree is mandatory for
          teaching in higher primary schools and high schools. The minimum
          qualification required for entry into B.Ed. course is Graduate in any
          discipline. While students from arts stream are trained to teach
          subjects like history, civics, geography and languages. The students
          from science stream are trained to teach mathematics, physics,
          chemistry and biology. After BEd, students can pursue Master in
          Education (M.Ed.) in Indian universities. National Council for Teacher
          Education is statutory body which regulates courses in teaching.
        </p>
      </div>

      <div className="info-box">
        <h3>
          <i className="fas fa-info-circle"></i>Admission in B.Ed. through
          Entrance Exam and Centralize State Level Counseling.
        </h3>
      </div>
    </div>
  );
}

export default BEd;
