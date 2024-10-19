import React, { useState } from "react";
import "../Style/Footer.scss";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import $ from "jquery";

function Footer() {
  const [user, setUser] = useState({
    name: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, message, phone } = user;
    if (name && message && phone && isValidPhoneNumber(phone)) {
      // alert("Posted")
      axios
        .post("https://lbs-harda.herokuapp.com/contact", user)
        .then((res) => console.log(res));
    } else {
      alert("Invalid Input");
    }

    setUser({
      name: "",
      message: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="Footer">
        {/* <div className="d-flex justify-content-center align-items-center p-2">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643392626/Logo_i0xx9m.png" id="Logo" alt="logo" className="px-4" />
          <h3 id="clgname">
            Lal Bahadur Shastri Vyavasayik Adhyayan Mahavidhyalaya
          </h3>
        </div> */}
        <div className="mainContainer">
          {/* <div className="vl" id="footervl"></div> */}

          <div className="row">
            <div className="col section">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7380.441546898512!2d77.08486417413584!3d22.345291241200652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d713cbe241817%3A0x543a55c35627bca9!2sLal%20Bahadur%20Shastri%20Vyavsayik%20Adhyayan%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1640353431984!5m2!1sen!2sin"
                className="Map"
                loading="lazy"
              ></iframe>
            </div>

            <div className="col section">
              <h4>Important Links</h4>
              <ul>
                <a href="http://mpbse.nic.in/" target="_blank" rel="noreferrer">
                  <li>MPBSE</li>
                </a>
                <a
                  href="http://www.bubhopal.ac.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>BU, Bhopal</li>
                </a>
                <a href="https://ncte.gov.in/" target="_blank" rel="noreferrer">
                  <li>NCTE</li>
                </a>
                <a
                  href="http://highereducation.mp.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>Higher Education</li>
                </a>
              </ul>
            </div>

            <div className="col section">
              <h4>Follow us on</h4>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/lbs.harda.9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCmKerU5uHmrVbdPYC-ksU8A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lbscollegeharda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="col section">
              <div className="form">
                <h4>Contact us</h4>

                <form method="POST">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    className="formInput"
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <PhoneInput
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    type="text"
                    name="phone"
                    value={user.phone}
                    className="formInput input-phone"
                    onChange={(e) => {
                      if (e !== undefined) {
                        isValidPhoneNumber(e)
                          ? $(".PhoneInputInput").removeClass("invalid")
                          : $(".PhoneInputInput").addClass("invalid");
                      }
                      setUser({
                        ...user,
                        phone: e,
                      });
                    }}
                    placeholder="Phone number"
                  />
                  <input
                    type="text"
                    name="message"
                    value={user.message}
                    className="formInput"
                    onChange={handleChange}
                    placeholder="Message"
                  />
                  <button
                    type="button"
                    id="submit"
                    onClick={register}
                    className="btn btn-outline-light btn-sm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="col section">
              <p>
                Handia Road, National Highway 59A Harda, Madhya Pradesh 461331
              </p>
              <ul>
                <li>
                  <i className="fas fa-phone-volume"></i>07577-292067
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  lbsharda@gmail.com
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-globe"></i>lbsharda.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Designed and developed by </p>
        <a href="http://archlabs.co.in/" target="blank">
          <img src="https://res.cloudinary.com/unesco-admin/image/upload/v1655819011/LOGO1_ztvkiy.png" alt="logo" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
