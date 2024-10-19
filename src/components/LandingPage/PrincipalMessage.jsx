import React from "react";
import principal from "../.././Images/Principal.png";
import "../.././Style/LandingPage/PrincipalMessage.scss";
import { Link } from "react-router-dom";

function PrincipalMessage() {
  return (
    <div className="maincont">
      <div className="principal">
        <img src={principal} alt="principal" />
        <div className="name">
          <p>Dr. Rajeev Kumar Khare</p>
          <p>(Principal)</p>
        </div>
      </div>

      <div className="vl"></div>

      <div className="pmcontent">
        <h1>Principal Message</h1>
        <p>
          The academic year 2020-2021 is the 20 Year Completion of Lal Bahadur
          Shastri Vyavsayik Adhayayan Mahavidyalaya, Harda. On this occasion, I
          wish to congratulate its Ex Principals Mr R. S. Khirwadkar and Dr
          G.M.A. Ramani, Teaching and Non-Teaching Staff, Ex and Present
          Students for their commendable achievement. I have great pleasure in
          conveying my best wishes to all of you.
        </p>
        <p>
          Lal Bahadur Shastri Vyavsayik Adhayayan Mahavidyalaya, Harda has a
          reputation for attracting the best students in their chosen faculty.
          It is a matter of great pride that the College has made consistent
          progress, year on year, in academic and co-curricular activities.
        </p>

        <Link to="/pm" style={{ width: "fit-content", alignSelf: "end" }}>
          <span style={{ color: "#216FDB" }}>
            {" "}
            Read more {">"}
            {">"}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default PrincipalMessage;
