import { React, useEffect, useState } from "react";
import "../Style/Alert.scss";
import axios from "axios";
import Marquee from "react-fast-marquee";

function Alert(props) {
  const [announcements, setAnnouncements] = useState([]);

  const getAnnouncements = async () => {
    await axios.get("https://lbs-harda.herokuapp.com/news").then((res) => {
      const data = res.data;
      setAnnouncements(data);
    });
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <div className="acontent">
      <div className="marquee-sibling">News</div>
      <Marquee gradient={false} pauseOnHover={true}>
        {announcements.length > 0
          ? announcements.map((value, index) => {
              return <li key={index}>{value.newshead}</li>;
            })
          : null}
        {props.setLoading1(false)}
      </Marquee>
    </div>
  );
}

export default Alert;
