import React, { useState,useEffect } from "react";
import "../Style/ContactUs.scss";
import TextField from "@mui/material/TextField";
import axios from "axios";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function ContactUs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, message } = user;
    if (name && email && message) {
      axios
        .post("https://lbs-harda.herokuapp.com/contact", user)
        .then((res) => console.log(res));
    } else {
      alert("Fill all The Informations");
    }

    setUser({
      name: "",
      email: "",
      message: "",
    });
  };

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  return (
    <div className="contactus-main">
      <div className="green-box"></div>
      <div className="contactus">
        <div className="grid-container">
          <div className="mycontent item1">
            <VisibilitySensor onChange={onChange} scrollCheck={true}>
              <h1>Contact Us</h1>
            </VisibilitySensor>
            <hr />
          </div>
          <div className="item2">
            <form className="cntform">
              <span>Leave us a message</span>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
                size="small"
                placeholder="Full Name"
                value={user.name}
                margin="dense"
                focused
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                size="small"
                placeholder="Email Address"
                margin="dense"
                value={user.email}
                focused
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Your Messsage"
                variant="outlined"
                name="message"
                onChange={handleChange}
                size="small"
                placeholder="Message"
                value={user.message}
                margin="dense"
                multiline
                focused
              />
              <p className="form-text">
                LBS will use this information to connect you with right person
                to answer your question and may send related content.By checking
                the box,you allow LBS to store and process the information
                submitted above for this purpose. You may unsubscribe from these
                communications at any time. For more information please review
                our Privacy Policy.
              </p>
              <p className="form-text">
                <input type="checkbox" name="check" onChange={toggleCheck} /> I
                agree to receive other communications from LBS.
              </p>
              <button
                type="button"
                onClick={register}
                className="btn-send"
                style={{
                  margin: 0,
                  background: "#216FDB",
                  width: "100%",
                  borderRadius: 0,
                  padding: "2%",
                  color: "#ffffff",
                  fontSize: "1.2rem",
                }}
              >
                Send
              </button>
            </form>
          </div>
          <div className="line item3"></div>
          <div className="item4 map-flex">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7380.441546898512!2d77.08486417413584!3d22.345291241200652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d713cbe241817%3A0x543a55c35627bca9!2sLal%20Bahadur%20Shastri%20Vyavsayik%20Adhyayan%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1640353431984!5m2!1sen!2sin"
              width="90%"
              height="90%"
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
            <p className="map-text">
              Handia Road, National Highway 59A
              <br />
              Harda, Madhya Pradesh 461331
              <br />
              88895-13786
              <br />
              lbsharda@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="green-box"></div>
    </div>
  );
}

export default ContactUs;
