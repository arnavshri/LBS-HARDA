import React from "react";

function EventCard(props) {
  return (
    <div className="cont2">
      <div className="info">
        <h3 id="big">{props.data.upeventsHead}</h3>
        <p>{props.data.upeventsDes}</p>

        <p>
          <a href={props.data.link} className="eventLink" target="_blank" rel="noreferrer">
            Click to view more!
          </a>
        </p>
      </div>
      <div className="date">
        <p id="date">{props.data.day}</p>
        <p id="month">{props.data.month}</p>
      </div>
    </div>
  );
}

export default EventCard;
