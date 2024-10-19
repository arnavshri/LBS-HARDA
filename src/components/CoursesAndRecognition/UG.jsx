import {React, useEffect} from "react";
import $ from "jquery"

function UG() {
  useEffect(() => {
    $("#bcai").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#bca").offset().top,
        },
        1000
      );
    });

    $("#bsci").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#bsc").offset().top,
        },
        1000
      );
    });

    $("#bcomi").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#bcom").offset().top,
        },
        1000
      );
    });

    $("#bai").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#ba").offset().top,
        },
        1000
      );
    });

    $("#bbai").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#bba").offset().top,
        },
        1000
      );
    });
  }, []);

  return (
    <div>

      <div className="courses">
        <div className="row">
          <div className="col-4 cource" id="bcai">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_6_z4ytd4.png" alt="" />
            <h2>B.C.A</h2>
          </div>
          <div className="col-4 cource" id="bsci">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_2_itgo5t.png" alt="" />
            <h2>B.Sc</h2>
          </div>
          <div className="col-4 cource" id="bcomi">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_7_xe8of1.png" alt="" />
            <h2>B.Com</h2>
          </div>
          <div className="col-4 cource" id="bai">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_4_hjl1it.png" alt="" />
            <h2>B.A</h2>
          </div>
          <div className="col-4 cource" id="bbai">
            <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648914190/Group_5_lfnsol.png" alt="" />
            <h2>B.B.A</h2>
          </div>
        </div>
      </div>

      <div className="coursesBrief">
          <div className="courceBrief" id="bca">
              <h1>Bachelor of Computer Application</h1>
              <p>BCA (Bachelor of Computer Application) is a 3-year UG course that imparts knowledge on the basics of computer application and software development.</p>
              <p>BCA Admission 2021 is granted through both merit-based and entrance exam-based admission processes. The minimum BCA eligibility criteria followed across all Top BCA Colleges is 50% marks in 10+2 or equivalent examination with computer application/computer science as an additional or core subject. </p>
          </div>

          <div className="courceBrief" id="bsc">
              <h1>Bachelor In Science</h1>

              <p>BSc (Bachelor of science) is a 3-year undergraduate course that deals with hard science subjects such as Physics, Chemistry, Mathematics, Biology and Computer.</p>
              <p>BSc Syllabus depends on the specialization taken by the student. BSc 1st year largely introduces the course to the student with some basic fundamentals about the specialization.</p>
              
              <ul>
                <li>Computer Science</li>
                <li>Physics – Chemistry – Mathematics</li>
                <li>Microbiology</li>
                <li>Biotechnology</li>
                <li>Seed Technology</li>
                <li>Botany – Zoology – Chemistry</li>
              </ul>
          </div>

          <div className="courceBrief" id="bcom">
              <h1>Bachelor of Commerce</h1>

              <p>BCom (Bachelor of Commerce) is a 3-year undergraduate program. BCom course is designed to impart managerial skills to students while focusing on a particular business area.</p>
              <p>During the 3-years BCom course, the aspirants will learn about the general business principles, and at the same time, study core commerce subjects such as finance, economics, accounting, actuarial studies, business management, etc. </p>
              <p>The minimum required eligibility for BCom courses is 50% marks in class 12 or equivalent examination. The BCom course is the most popular and sought after course by the commerce students.  The BCom Syllabus focusses on subjects such as Taxation, Economics, Accounts etc.</p>
              
              <ul>
                <li>Computer Application</li>
                <li>Taxation</li>
                <li>Office Management & Secretary Practice</li>
                <li>Economics</li>
              </ul>
          </div>
          
          <div className="courceBrief" id="ba">
              <h1>Bachelor in Arts</h1>

              <p>BA (Bachelor of Arts) is one of India's most popular undergraduate degree programmes. Every year, over 9 million students pursue Bachelor of Arts courses in a variety of disciplines like History, Hindi, English, Psychology, and Journalism after graduating from high school.</p>
              
              <ul>
                <li>Computer Application</li>
                <li>History</li>
                <li>Political Science</li>
                <li>Sociology</li>
                <li>Economics</li>
                <li>Rural Banking</li>
              </ul>
          </div>

          <div className="courceBrief" id="bba">
              <h1>Bachelor of Business Administration</h1>

              <p>BBA (Bachelor of Business Administration) imparts adequate business administration skills to the students. BBA Subjects are Principles of Management, Macroeconomics, Human Behavior & Ethics at Workplace, Management Accounting, Banking & Insurance.</p>

            <div className="mt-3">
              <p>
              BBA Course is a three year undergraduate business management course that imparts managerial and entrepreneurial skills to students through BBA Subjects. BBA courses are available in various specializations such as Finance, Marketing and HR Management. Bachelor of Business Administration is availble to students from all streams like Arts, Science and Commerce. 
              </p>
            </div>

          </div>

      </div>

    </div>
  );
}

export default UG;
