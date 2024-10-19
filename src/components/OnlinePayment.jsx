import React,{useState} from "react";
import "../Style/OnlinePayment.scss";
import TextField from "@mui/material/TextField";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";

function OnlinePayment() {

  const [user, setUser] = useState({
    name: "",
    fathername:"",
    address:"",
    classs:"",
    year:"",
    studyingYear:"",
    course:"",
    amount:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, fathername, address,classs,year,studyingYear,course,amount } = user;
    if (name &&fathername && address&& classs && year&&studyingYear&&course&&amount) {
      axios
        .post("https://lbs-harda.herokuapp.com/onlinepayment", user)
        .then((res) => console.log(res));

    } else {
      alert("Fill all The Informations");
    }

    setUser({
      name: "",
      fathername:"",
      address:"",
      classs:"",
      year:"",
      studyingYear:"",
      course:"",
      amount:"",
    });
  };

  return (
    <div className="onlinepay-main">
      <div className="green-box"></div>
      <div className="onlinepay">
        <h1>Online Payment</h1>
        <hr />
        <span>Student's Information</span>
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={user.name}
          name="name"
          size="small"
          placeholder="Full Name"
          onChange={handleChange}
          color="success"
          margin="dense"
          focused
        />
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Father's Name"
          value={user.fathername}
          variant="outlined"
          onChange={handleChange}
          name="fathername"
          size="small"
          placeholder="Full Name"
          color="success"
          margin="dense"
          focused
        />
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
          value={user.address}
          name="address"
          size="small"
          placeholder="Address"
          onChange={handleChange}
          margin="dense"
          color="success"
          focused
        />
        <br />
        <div className="two-item-flex">
          <TextField
            id="outlined-basic"
            label="Class"
            variant="outlined"
            value={user.classs}
            name="classs"
            size="small"
            placeholder="Class"
            margin="dense"
            onChange={handleChange}
            color="success"
            focused
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={user.year}
            name="year"
            onChange={handleChange}
            size="small"
            placeholder="Year"
            margin="dense"
            color="success"
            focused
          />
        </div>
        <br />
        <div className="two-item-flex">
          <TextField
            id="outlined-basic"
            label="Studying Year"
            value={user.studyingYear}
            onChange={handleChange}
            variant="outlined"
            name="studyingYear"
            size="small"
            placeholder="Studying Year"
            margin="dense"
            color="success"
            focused
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Course"
            variant="outlined"
            name="course"
            value={user.course}
            onChange={handleChange}
            size="small"
            placeholder="Course"
            margin="dense"
            color="success"
            focused
          />
        </div>
        <br />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={user.amount}
          onChange={handleChange}
          name="amount"
          size="small"
          placeholder="Amount"
          margin="dense"
          color="success"
          focused
        />
        <br />
        <button
          type="button"
          onClick={register}
          className="btn-send"
          style={{
            margin: 0,
            background: "#27623d",
            width: "100%",
            borderRadius: 0,
            padding: "2%",
            color: "#ffffff",
            fontSize: "1.2rem",
            border: "none",
          }}
        >
          Submit
        </button>
      </div>
      <div className="green-box"></div>
    </div>
  );
}

export default OnlinePayment;
