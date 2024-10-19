import React from "react";
import { useEffect } from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/AboutUs/About.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function About() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="About" className="aboutHead">
      <div className="box2">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1>About Us</h1>
        </VisibilitySensor>
        <p>
          Lal Bahadur Shastri Vyavsayik Adhyayan Mahavidyalaya, Harda was
          established on 1st July 2000, with the objective of providing
          education among the poor and educationally backward class. At certain
          extend it is true today also because a large number of students come
          to this college from the remote places, peripheries and nearby
          villages and at the same time because of its quality education this
          college has become first choice of elite class and meritorious
          students also.
          <br />
          <br />
           college staff is more concerned about students learning which
          is evaluated by regular class test, interaction with student’s,
          assignments. To assess his preparation for final exams college
          conducts a pre-university test / exam. It is based on the university
          exam pattern.
        </p>
      </div>

      <div className="boxes">
        <div className="box1">
          <h1>Recognition</h1>
          <ul>
            <li>
              Department of Higher Education, Madhya Pradesh (for Regular
              Programme)
            </li>
            <li>
              <a href="/" style={{ color: "#216FDB" }}>
                National Council for Teachers Education, New Delhi (for Teachers
                Training programme)
              </a>
            </li>
          </ul>
        </div>
        <div className="box1">
          <h1>Affiliation</h1>
          <ul>
            <li>Barkatullah University, Bhopal</li>
            <li>Board of Secondary Education, Bhopal</li>
          </ul>
        </div>
        <div className="box1" id="clgAddress">
          <h1>College Address</h1>
          <ul>
            <li>LBS College Campus,Handia Road, Harda</li>
            <li>Phone: 07577-292067</li>
            <li>Mob: +91-8889613786</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
