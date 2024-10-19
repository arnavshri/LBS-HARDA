import { React, useEffect, useState } from "react";
import "../Style/Navbar.scss";
import $ from "jquery";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

function Navbar() {
  useEffect(() => {
    $("#home").hover(function () {
      $("#home-menu").stop(true, true).slideToggle();
    });
    $("#aboutUs").hover(function () {
      $("#aboutUs-menu").stop(true, true).slideToggle();
    });
    $("#courses").hover(function () {
      $("#courses-menu").stop(true, true).slideToggle();
    });
    $("#infrastructure").hover(function () {
      $("#infrastructure-menu").stop(true, true).slideToggle();
    });
    $("#admission").hover(function () {
      $("#admission-menu").stop(true, true).slideToggle();
    });
    $("#activities").hover(function () {
      $("#activities-menu").stop(true, true).slideToggle();
    });
    $("#audit").hover(function () {
      $("#audit-menu").stop(true, true).slideToggle();
    });
    $("#ba").hover(function () {
      $("#ba-menu").stop(true, true).slideToggle();
    });
  }, []);

  useEffect(() => {
    $(".closeNav").on("click", () => {
      $(".navbar-dark").click();

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  function onChange(isVisible) {
    if (!isVisible) {
      $(".Navbar").addClass("fixed-top");
    }
  }

  const [open, setOpen] = useState(false);

  const slideLeft = ()=>{
    open? setOpen(false) : setOpen(true)
    open? $("#navbarNav").show('slide') : $("#navbarNav").hide('slide')
  }

  return (
    <VisibilitySensor partialVisibility onChange={onChange} scrollCheck={true}>
      <div className="Navbar">
        <div
          className="d-flex justify-content-center align-items-center p-2"
          id="header"
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
              id="logo"
              alt="logo"
              className="px-4"
            />
          </Link>

          <div className="clgHeading">
            <h2 id="clgName">
              L<div className="Smaller">AL</div> B
              <div className="Smaller">AHADUR</div> S
              <div className="Smaller">HASTRI</div> V
              <div className="Smaller">YAVASAYIK</div> A
              <div className="Smaller">DHYAYAN</div> M
              <div className="Smaller">AHAVIDHYALAYA</div>{" "}
            </h2>
            <h4 id="clgName2">Harda (M.P)</h4>
          </div>

          <button
            className="navbar-dark"
            type="button"
            onClick={slideLeft}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar  */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item" id="home">
                <Link className="nav-link closeNav" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item" id="aboutUs">
                <div className="nav-link">About Us</div>
                <div id="aboutUs-menu" className="dropdown-menu">
                  <ul>
                    {/* <li>
                    <Link className="dropdown-item closeNav" to="/agb">
                    About governing body
                    </Link>
                  </li> */}
                    <li>
                      <Link className="dropdown-item closeNav" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/pm">
                        Principal's message
                      </Link>
                    </li>
                    {/* <li>
                    <Link className="dropdown-item closeNav" to="/publications">
                      Publications
                    </Link>
                  </li> */}
                    <li>
                      <Link className="dropdown-item closeNav" to="/com">
                        Committees
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/awr">
                        Late Shri Ramesh Prasad Khare Smriti Award
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <Link className="nav-link closeNav" to="/news">
                News
              </Link>

              <li className="nav-item" id="courses">
                <div className="nav-link">Departments</div>
                <div id="courses-menu" className="dropdown-menu">
                  <ul>
                    <li>
                      <Link className="dropdown-item closeNav" to="/ugnpg">
                        Undergraduate/Post-graduate Courses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/tc">
                        Teacher's Training Courses
                      </Link>
                    </li>
                    <li id="ba">
                      <Link className="dropdown-item closeNav" to="/ba">
                        Biometric Attendance
                      </Link>

                      <div id="ba-menu" className="dropdown-menu">
                        <ul>
                          <li>
                            <Link className="dropdown-item closeNav" to="/">
                              B.Ed. Attendance
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item closeNav" to="/">
                              D.El.Ed Attendence
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item" id="infrastructure">
                <div className="nav-link">Infrastructure</div>
                <div id="infrastructure-menu" className="dropdown-menu">
                  <ul>
                    <li>
                      <Link className="dropdown-item closeNav" to="/lnb">
                        Land and Building
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/classroom">
                        Classrooms
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/lib">
                        Library
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/laboratory">
                        Laboratories
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/oi">
                        Other Information
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item" id="admission">
                <div className="nav-link">Admission</div>
                <div id="admission-menu" className="dropdown-menu">
                  <ul>
                    <li>
                      <Link className="dropdown-item closeNav" to="/adm">
                        Admission 2022-23
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/online">
                        Undergraduate/ Post-graduate
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/bed">
                        B.Ed
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item closeNav" to="/deled">
                        D.El.Ed
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item" id="activities">
                <div className="nav-link">Activities</div>
                <div id="activities-menu" className="dropdown-menu">
                  <ul>
                    <li>
                      <Link className="dropdown-item closeNav" to="/nss">
                        NSS
                      </Link>
                    </li>
                    {/* <li>
                    <Link className="dropdown-item closeNav" to="/se">
                      Student's Events
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item closeNav" to="/sc">
                      Student's Corner
                    </Link>
                  </li> */}
                    <li>
                      <Link className="dropdown-item closeNav" to="/pg">
                        Photo gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link closeNav" to="/contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item ebtn nav-link closeNav">
                <a
                  href="https://www.youtube.com/channel/UCmKerU5uHmrVbdPYC-ksU8A"
                  target="__blank"
                >
                  Our Youtube Channel
                </a>
              </li>

              <li className="nav-item ebtn nav-link closeNav">
                <a href="http://ecampus.lbsharda.com/" target="blank">
                  E-Campus
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </VisibilitySensor>
  );
}

export default Navbar;
