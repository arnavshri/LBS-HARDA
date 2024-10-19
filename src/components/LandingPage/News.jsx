import { React, useState, useEffect } from "react";
import "../.././Style/LandingPage/News.scss";
import axios from "axios";
import NewsCard from "./NewsCard";
import EventCard from "./EventCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoadingScreen from "react-loading-screen";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [notice, setNotice] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNotice = async () => {
    await axios.get("https://lbs-harda.herokuapp.com/notice").then((res) => {
      const data = res.data;
      setNotice(data);
    });
  };

  const getEvents = async () => {
    await axios
      .get("https://lbs-harda.herokuapp.com/upcomingevent")
      .then((res) => {
        const data = res.data;
        setEvents(data);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getNotice();
      await getEvents();
      setLoading(false);
    };

    fetchData();
  }, []);

  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }

  return (
    <>
      <LoadingScreen
        loading={loading}
        bgColor="#ffffff"
        spinnerColor="#01471B"
        textColor="#01471B"
        logoSrc="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
        text="Loading...."
      ></LoadingScreen>

      <div className="NEWS">
        <VisibilitySensor onChange={onChange} scrollCheck={true}>
          <h1>News And Upcoming Events</h1>
        </VisibilitySensor>

        <div className="news">
          <div className="top">
            <div className="cont1">
              <h1>News</h1>
            </div>

            {notice.length > 0 ? (
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={true}
                showIndicators={false}
              >
                {notice.map((value, index) => {
                  return <NewsCard data={value} />;
                })}
              </Carousel>
            ) : null}
          </div>

          <div className="bottom">
            {events.length > 0 ? (
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={true}
                showIndicators={false}
              >
                {events.map((value, index) => {
                  return <EventCard data={value} />;
                })}
              </Carousel>
            ) : null}
            <div className="cont1">
              <h1>Upcoming Events</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
