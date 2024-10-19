import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/Admission/BEd.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function DElEd() {
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
        <h1>About D.El.Ed</h1>
      </VisibilitySensor>
      <h4>
        "Teaching should be such that what is offered is perceived as a valuable
        gift and not as a hard duty."
      </h4>
      <div className="BEd-text">
        <p>
          D.EI.Ed. , also popular as Diploma in Education, is a two-year full
          time diploma programme. There are several teaching training institutes
          in India, which conduct Diploma in Education (D.EI.Ed.) programme. To
          be eligible, one has to pass 10+2 level of examination, from any
          recognized Board. Admissions to this programme in most of the states
          of India are done under the guidelines of State Council of Educational
          Research and Training (SCERT) of each state. After pursuing D.EI.Ed.
          course, one can become teacher in any government or private school.
        </p>
      </div>

      <div className="info-box">
        <h3>
          <i className="fas fa-info-circle"></i>In D.EI.Ed., admission process
          is as per State Government Rule.
        </h3>
      </div>
    </div>
  );
}

export default DElEd;
