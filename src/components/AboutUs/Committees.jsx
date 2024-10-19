import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/AboutUs/Committees.scss";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Committees() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="committees" className="aboutHead">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h1>COMMITTEES</h1>
      </VisibilitySensor>
      <h3>
        For Smooth Functioning and Development of the System Following
        Committees Are Formed:
      </h3>
      <div className="grid-container7">
        <div className="item20">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389310/rk_fwhjve.png" alt="" width="50%"></img>
          <h3>
            Dr. Rajeev Kumar Khare <br /> Principal
          </h3>
          <p>Ph.D, MPhil (Edu), MSc (Maths)</p>
        </div>
        <div className="item21">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389312/sb_d6bndf.png" alt="" width="50%"></img>
          <h3>
            Shri Sanjay Bhargava <br />
            Vice Principal
          </h3>
          <p>NET, MPhil, MCA, BE</p>
        </div>
        <div className="item22">
          <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1643389311/kk_hkfgxd.png" alt="" width="50%"></img>
          <h3>
            Dr. Kshama Khare <br />
            Director
          </h3>
          <p>Ph.D, M.Ed, MCM, Msc(Botany)</p>
        </div>
      </div>
      <h2>HEAD OF DEPARTMENTS</h2>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr Kshama Khare</td>
            <td>Department of Teacher Education</td>
            <td>Ph.D, M.Ed, MCM, M.Sc(Botany)</td>
          </tr>
          <tr>
            <td>Shri Jagdish Gour</td>
            <td>Departement of Commerce</td>
            <td>MPhil, M.Com , LLB</td>
          </tr>
          <tr>
            <td>Shri Nimesh Pujari</td>
            <td>Department Of Arts</td>
            <td>MEd, MA(Hindi)</td>
          </tr>
          {/* <tr>
            <td>Smt Pooja Sharma</td>
            <td>D.Ed</td>
            <td>M.Ed, M.Sc(CS), MA(English)</td>
          </tr>
          <tr>
            <td>Smt Sudha Singh Mohe</td>
            <td>Nursing</td>
            <td>M.Sc(Nursing)</td>
          </tr> */}
          <tr>
            <td>Shri Alok Singh</td>
            <td>Department of Life Science</td>
            <td>M.Sc(Microbiology), B.Sc(Nursing)</td>
          </tr>
          <tr>
            <td>Ms Shiva Tiwari</td>
            <td>Department of Physics</td>
            <td>M.Sc(Physics)</td>
          </tr>
          <tr>
            <td>Shri Rahul Morchhale</td>
            <td>Department of Computer Science</td>
            <td>MCA</td>
          </tr>
          <tr>
            <td>Dr Dheeraj Negi</td>
            <td>Department Of Management</td>
            <td>P.hd. Commarce, M.Com</td>
          </tr>
          <tr>
            <td>Shri Satish Lowanshi</td>
            <td>Department Of Maths</td>
            <td>MSc(Maths), BEd</td>
          </tr>
        </tbody>
      </table>

      <h2>ASSISSTANT PROFESSORS</h2>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smt Kavita Tiwari</td>
            <td>MEd, MA(Economics)</td>
          </tr>
          <tr>
            <td>Smt Sushma Bhatt</td>
            <td>MEd, MA(History)</td>
          </tr>
          <tr>
            <td>Smt Neelu Shrivastava</td>
            <td>MA(Education), MA(History)</td>
          </tr>
          {/* <tr>
            <td>Smt Renuka Shrivastava</td>
            <td>Mphil, MCM, MA(History), BEd</td>
          </tr> */}
          <tr>
            <td>Shri Nimesh Pujari</td>
            <td>MEd, MA(Hindi)</td>
          </tr>
          <tr>
            <td>Smt Shweta Singh</td>
            <td>MSc(Maths), BEd</td>
          </tr>
          <tr>
            <td>Shri Manish Gour</td>
            <td>MEd, MA(Sociology)</td>
          </tr>
          <tr>
            <td>Smt Jyoti Gour</td>
            <td>MCom, BEd</td>
          </tr>
          <tr>
            <td>Shri Manan Singh</td>
            <td>MPEd</td>
          </tr>
          <tr>
            <td>Shri Ashish Gour</td>
            <td>Sangeet Praveen, Sangeet Prabhakar</td>
          </tr>
          <tr>
            <td>Shri Sunil Rajput</td>
            <td>MEd, MCom</td>
          </tr>
          <tr>
            <td>Smt Rashmi Pujari</td>
            <td>MEd, MA(History)</td>
          </tr>
          <tr>
            <td>Smt Harsha Jaiswal</td>
            <td>M.Ed., M.Sc Phy.</td>
          </tr>
          <tr>
            <td>Smt Reena Kourav</td>
            <td>MCom, BEd</td>
          </tr>
          {/* <tr>
            <td>Shiva Tiwari </td>
            <td>M.Sc  Physic</td>
          </tr> */}
          <tr>
            <td>Ms Heena Heena Qurashi</td>
            <td>M.Sc Agriculter</td>
          </tr>
          <tr>
            <td>Kavita Sarode </td>
            <td>M.Sc. Physics</td>
          </tr>
          <tr>
            <td>Shri Yogesh Gurjar</td>
            <td>B.Ed, MCom, PGDCA</td>
          </tr>
          <tr>
            <td>Smt Neha Modi</td>
            <td>MSc(Chemistry)</td>
          </tr>
          {/* <tr>
            <td>Smt Indu Solanki</td>
            <td>MSc(Chemistry), BEd</td>
          </tr> */}
          <tr>
            <td>Dr. Vinod Kumar</td>
            <td>Ph.D,MEd, MSc(Chemistry)</td>
          </tr>
          <tr>
            <td>Dr. Vinod Kumar Yadav</td>
            <td>Ph.D,MA(Education), MA(Sociology)</td>
          </tr>
          <tr>
            <td>Shri Devendra Choudhary</td>
            <td>MEd, MA(Sociology)</td>
          </tr>
          <tr>
            <td>Smt Varsha Choudhary</td>
            <td>MCom, BEd</td>
          </tr>
          <tr>
            <td>Dr. Nilesh Kumar Pandey</td>
            <td>Ph.D, MEd, MA(Sanskrit)</td>
          </tr>
          <tr>
            <td>Smt Dipti Patel</td>
            <td>MA(Fine Arts)</td>
          </tr>
          <tr>
            <td>Ms Rohi Jan</td>
            <td>MEd, MA(Urdu)</td>
          </tr>
          <tr>
            <td>Dr. Narendra Singh Bhati</td>
            <td>Ph.D, MEd, MA(History)</td>
          </tr>
          <tr>
            <td>Smt Ankita Khemka</td>
            <td>MBA</td>
          </tr>
          {/* <tr>
            <td>Ms Monika Bansal</td>
            <td>MCA</td>
          </tr>
          <tr>
            <td>Ms Kanchi Agarwal</td>
            <td>MSc(Chemistry)</td>
          </tr>
          <tr>
            <td>Ms Neelam Khandelwar</td>
            <td>BSc(Nursing)</td>
          </tr> */}
          <tr>
            <td>Smt Shanu Sharma</td>
            <td>MBA, BEd</td>
          </tr>
          {/* <tr>
            <td>Dr Dheeraj Negi</td>
            <td>P.hd. Commarce, M.Com</td>
          </tr> */}
          <tr>
            <td>Trapti Negi</td>
            <td>M.Sc. Chimestry, B.Ed.</td>
          </tr>
          <tr>
            <td>Surbhi Paliwal</td>
            <td>MCA</td>
          </tr>
          <tr>
            <td>Shri Shweta Vishwarkarma</td>
            <td>M.Com</td>
          </tr>
          <tr>
            <td>Shri Subdodh Raykhere</td>
            <td>MBA</td>
          </tr>
          <tr>
            <td>Shri Devendra Shukla</td>
            <td>M.Lib.</td>
          </tr>
          <tr>
            <td>Ms Pragya Upadhyay</td>
            <td>M.Sc. Phy, PGDCA</td>
          </tr>
          <tr>
            <td>Dr. Huma Batt</td>
            <td>Ph.D, MBA, MA (Social Work)</td>
          </tr>
        </tbody>
      </table>

      {/* <h2>TUTORS</h2>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Smt Nidhi Gour</td>
                <td>BSc(Nursing)</td>
            </tr>
            <tr>
                <td>Smt Sumitra Uikey</td>
                <td>BSc(Nursing)</td>
            </tr>
            <tr>
                <td>Smt Bharti Pal</td>
                <td>BSc(Nursing)</td>
            </tr>
            <tr>
                <td>Shri Rahul Shrivas</td>
                <td>BSc(Nursing)</td>
            </tr>
            <tr>
                <td>Shri Rajesh Pagare</td>
                <td>BSc(Nursing)</td>
            </tr>
            <tr>
                <td>Shri Abhishek Gour</td>
                <td>PB(Nursing)</td>
            </tr>
        </tbody>

      </table> */}
    </div>
  );
}

export default Committees;
