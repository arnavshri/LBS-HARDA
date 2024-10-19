import React, { useState, useEffect } from "react";
import Numbers from "./Numbers";
import Quotes from "./Quotes";
import AboutUS from "./AboutUS";
import Announcement from "./Announcement";
import Facilities from "./Facilities";
import "../../Style/Media.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import LoadingScreen from "react-loading-screen";
import Modal from "./Modal";
import Alert from "../Alert";

function LandingPage() {
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [loading1]);

  return (
    <div>
      <LoadingScreen
        loading={loading1}
        bgColor="#ffffff"
        spinnerColor="#01471B"
        textColor="#01471B"
        logoSrc="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
        text="Welcome"
      >
        <Alert setLoading1={setLoading1} />

        <Announcement/>
        <Facilities />

        <div data-aos="fade-left">
          <Quotes />
        </div>

        <div data-aos="fade-right">
          <AboutUS />
        </div>
        <Modal />

        <div data-aos="fade-left">
          <Numbers />
        </div>

      </LoadingScreen>
    </div>
  );
}

export default LandingPage;
