import React from "react";

const PrescriptionResult = (props) => {
  const { age, date, gender, medicines, notes, username } = props;
  return (
    <div className="page">
      <section id="hospital">
        <h1>{"Doctor's Office"}</h1>
        <div className="dr-dt">
          <h3 className="fs-1_5">{"Dr. Vlad Andrei"}</h3>
          <span className="fs-0_3">{"O.R.L (otorinolaringologie)"}</span>
        </div>
        <p>
          Strada Nicolae Bălcescu, 56
        </p>
      </section>
      <hr />
      <section id="prescription">
        <div className="d-flex end">
          <label>{"S.No. : "}</label>
          <input type="text" value={Date.now()} disabled />
        </div>
        <div className="d-flex space">
          <div className="gm">
            <label>{"Patient's Name: "}</label>
            <input type="text" className="w-17" value={username} disabled />
          </div>
          <div>
            <label>{"Age : "}</label>
            <input type="text" className="w-5" value={age} disabled />
          </div>
          <div>
            <label>{"Gender : "}</label>
            <input type="text" className="w-5" value={gender} disabled />
          </div>
        </div>
        <div className="d-flex space">
          <div>
            <label>{"Associated Symptoms : "}</label>
            <input type="text" className="w-17" value={notes} disabled />
          </div>
          <div>
            <label>{"Date : "}</label>
            <input type="text" className="w-14" value={date} disabled />
          </div>
        </div>
        <div className="d-flex col">
          <label>{"Medical prescription : "}</label>
          <textarea disabled defaultValue={medicines}></textarea>
        </div>
        <div className="d-flex end">
          <label>{"Doctor's Signature : "}</label>
          <input type="text" disabled />
        </div>
      </section>
      <hr />
      <section id="footer">
        <footer>
          mail@hospital.com
        </footer>
      </section>
    </div>
  );
};

export default PrescriptionResult;
