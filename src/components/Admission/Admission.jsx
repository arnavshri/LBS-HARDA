import React,{useEffect} from "react";
import "../.././Style/AboutUs/AboutUs.scss";
import "../.././Style/Admission/Admission.scss";

import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function Admission() {
  function onChange(isVisible) {
    if (isVisible) {
      $(".Navbar").removeClass("fixed-top");
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="Admission" className="aboutHead">
      <VisibilitySensor onChange={onChange} scrollCheck={true}>
        <h1>Admission</h1>
      </VisibilitySensor>
      <div>
        <div className="adm-box">
          <div className="procedure">
            <h4>Information & Instruction for the student/candidate</h4>
          </div>
          <div className="procedure-con">
            <p>
              The candidates are advised to apply for admission, only if they
              fulfill the eligibility criterion. The bonus of checking
              appropriate eligibility lies with the candidate.
            </p>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Educational Qualification</h4>
          </div>
          <div className="procedure-con">
            <p>
              A candidate seeking admission in Graduate courses or Post Graduate
              courses should fulfill the criteria fixed by Department of Higher
              Education, Madhya Pradesh or Batkatullah University, Bhopal.
            </p>
            <p>
              A candidate seeking admission in B.Ed. and D.El.Ed. Course should
              be Graduate with 50% marks. Relaxation of 5% marks only for SC and
              ST candidates.
            </p>
            {/* <p>A candidate seeking admission in G.N.M. Course should be 10+2
              passed in any stream preferably Science-Bio with 40% marks.
            </p> */}
            <p>
              Candidates must ensure that they have correctly filled the
              admission form. After submission of online admission form, request
              for change of entries, will not be accepted. Incorrectly filled
              admission forms are liable to be rejected.
            </p>
            <p>
              The name of the candidate entered in the admission form, must be
              the same as given in the mark sheet of the qualifying examination.
              Any discrepancies in the name should be authenticated by the
              competent authority.
            </p>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Submission of admission form fee and form</h4>
          </div>
          <div className="procedure-con">
            <p>
              After successfully applying online, the candidate is required to
              keep the print out of the duly filled Admission form along with
              him.
            </p>
            <p>
              The print out of Online Admission Form along with Submission
              Receipt of a Demand Draft (Tution Fees) in favour of Principal,
              Lal Bahadur Shastri Vyav Adh Mahavidyalaya, Harda. The candidate
              should write the name of the course / specialization on the top of
              the envelope.
            </p>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Documents to be submitted along with admission form</h4>
          </div>
          <div className="procedure-con">
            <ol>
              <li>Mark-sheet of qualifying examination.</li>
              <li>
                Caste & domicile, certificates, Aadhar, Samagra Id on prescribed
                format of Govt of MP (for candidates belonging to Scheduled
                Caste (SC), Scheduled Tribe (ST) and Other Backward Class
                (excluding creamy layer) (OBC), of Madhya Pradesh).
              </li>
              <li>Three recent passport size photographs.</li>
              <li>Transfer Certificate.</li>
              <li>Gap Certificate.</li>
              <li>Character Certificate.</li>
              <li>Address proof</li>
            </ol>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Important dates</h4>
          </div>
          <div className="procedure-con">
            <p>
              Department of Higher Education, Universities, & MPBSE the right to
              amend or modify admission dates, which shall be notified at the
              website of college www.lbsharda.com.
            </p>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Admission Process</h4>
          </div>
          <div className="procedure-con">
            <p>
              Selected candidates shall be required to submit first installment
              of Tuition fee of one year/semester in the college, within seven
              days from the date of declaration of list of selected candidates.
              Failure in submitting the fee shall disqualify the candidature.
            </p>
          </div>
        </div>

        <div className="adm-box">
          <div className="procedure">
            <h4>Cancellation of admission</h4>
          </div>
          <div className="procedure-con">
            <p>
              If at any stage, it is found that a candidate has got admission in
              any course on the basis of false or incorrect information or by
              hiding relevant facts or if at any time after admission it is
              found that the admission was given to the candidate due to some
              mistake or oversight, the admission granted to such a candidate,
              shall liable to be cancelled forthwith, without any notice at any
              time during the course of his/her studies, by the college. In case
              of cancellation of admission fee would not be refunded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
