import "./customer.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";

import {
  AiOutlineFieldNumber,
  AiOutlineUser,
  AiTwotoneSave,
} from "react-icons/ai";

export default function Customer() {
  const [name, setName] = useState("");
  const [Account_number, setAccount_number] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  function validation(event) {
    event.preventDefault();

    const nm = document.getElementById("no").value;
    const nam = document.getElementById("names").value;
    const dt = document.getElementById("dates").value;
    const uni = document.getElementById("units").value;

    if (!nm) {
      document.getElementById("no").classList.add("red-border");
    } else {
      document.getElementById("no").classList.remove("red-border");
    }
    if (!nam) {
      document.getElementById("names").classList.add("red-border");
    } else {
      document.getElementById("names").classList.remove("red-border");
    }
    if (!dt) {
      document.getElementById("dates").classList.add("red-border");
    } else {
      document.getElementById("dates").classList.remove("red-border");
    }
    if (!uni) {
      document.getElementById("units").classList.add("red-border");
    } else {
      document.getElementById("units").classList.remove("red-border");
    }

    if (nm && nam && dt && uni) {
      alert("ok ready");

      store();
    }
  }

  async function store() {
    alert(date);
    const item = {
      name: name,
      Account_number: Account_number,
      date: date,
      value: value,
    };
    let result = await fetch("http://localhost:8000/api/store", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
  }

  return (
    <div className="customer">
      <div className="contains">
        <div className="up">
          <div className="img">
            <img
              src="https://ebill.ceb.lk/img/cebcarelitelogo.png
"
              alt=""
              className="ceb-img"
            />
          </div>
          <div className="span">WELCOME TO</div>
          <div className="header">
            <h2 className="ceb">Ceylon Electricity Board</h2>
          </div>
        </div>

        <hr />
        <form>
          <div className="center">
            <div className="c-up">
              <h className="register">Registration for CEB e-Billing Service</h>
            </div>
            <div className="c-down">
              <div className="contains-center">
                <span className="up-title">
                  Account No. <span className="star">*</span>
                </span>
                <div className="ac-no">
                  <div className="icon-border">
                    <span className="icon">
                      <AiOutlineHome className="r-icon" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="account"
                    placeholder="Account No."
                    id="no"
                    onChange={(e) => setAccount_number(e.target.value)}
                    value={Account_number}
                  />
                </div>
                <br />
                <span className="up-title">
                  Customer name <span className="star">*</span>
                </span>

                <div className="user-name">
                  <div className="icon-border">
                    <span className="icon">
                      <AiOutlineUser className="r-icon" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="account"
                    placeholder="Account No."
                    id="names"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <br />
                <span className="up-title">
                  Value <span className="star">*</span>
                </span>

                <div className="date">
                  <div className="icon-border">
                    <span className="icon">
                      <AiOutlineFieldNumber className="r-icon" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="account"
                    placeholder="No of units"
                    id="units"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                  />
                </div>

                <br />
                <span className="up-title">
                  Date <span className="star">*</span>
                </span>

                <div className="value">
                  <div className="icon-border">
                    <span className="icon">
                      <BsCalendar2Date className="r-icon" />
                    </span>
                  </div>
                  <input
                    type="date"
                    className="account"
                    placeholder="Account No."
                    id="dates"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </div>

                <br />
                <div className="save">
                  <AiTwotoneSave className="icon-b" />
                  <input
                    type="submit"
                    value="save"
                    className="save-btn"
                    onClick={validation}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="bottom"></div>
      </div>
    </div>
  );
}
