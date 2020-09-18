import React from "react";

const OfficialExperience = () => {
  return (
    <div
      id="OfficialExperience"
      style={{
        backgroundColor: "#89d5d2",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "25px",
          fontSize: "25px",
        }}
      >
        Experience
      </div>
      <div
        className="full-content-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 50%)50%)",
          gridGap: "30px 32px",
          margin: "50px",
        }}
      >
        <div
          className="LeftContentWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          <div>June 2020-July 2022</div>
          <hr></hr>
          <div> Ascent Law Office Administrator, Collections, Accounting</div>
        </div>
        <div
          className="RightContentWrapper"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          Mainly I made collections calls, but I was also taught some
          accounting. I would spend a certain amount of time during the day at
          the front desk.
        </div>
        <div
          className="LeftContentWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          <div>April 2019- Jan 2020, July 2020-Current</div>
          <hr></hr>
          <div> Virtual Teller</div>
        </div>
        <div
          className="RightContentWrapper"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          I began as a teller but quickly switched roles to become a virtual
          teller. I was given leadership positions such as closing supervisor.
        </div>
      </div>
    </div>
  );
};

export default OfficialExperience;
