import React from "react";

function NewsCard(props) {
  return (
    <div className="cont2">
      <div className="info">
        <h3 id="big">{props.data.noticeHead}</h3>
        <p>{props.data.noticeDes}</p>
        <p>
          <a href={props.data.link} className="newsLink" target="_blank" rel="noreferrer">
            Click to views more!
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

export default NewsCard;
