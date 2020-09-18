import React from "react";

const Experience = () => {
  return (
    <div
      id="allSections-wrapper"
      style={{
        backgroundColor: "#a86030",
        fontSize: "1.35rem",
        fontWeight: "900",
        padding: "20px 20px",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px",
        }}
      >
        Experience
      </h1>
      <div className="NEWdiv">
        <div
          className="section1-wrapper"
          style={{
            width: "100%",
            padding: "10px",
            borderBottom: "solid black",
          }}
        >
          <div
            className="BothSidesOfOptions-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "25% 75%",
              width: "100%",
              gap: "0px",
            }}
          >
            <div
              className="left-wrapper"
              style={{
                borderRight: "1px solid black",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="left-grid/words-wrapper"
                style={{
                  display: "grid",
                  gridAutoColumns: "100%",
                  gap: "0px",
                }}
              >
                <span>April 2019- Jan 2020, July 2020-Current</span>
                <hr style={{ width: "100%" }}></hr>
                <span>Cyprus Credit Union</span>
                <span>Virtual Teller</span>
              </div>
            </div>
            <div
              className="Right-Words-Wrapper"
              style={{
                width: "100%",
                height: "100%",
                padding: "10px 10px",
              }}
            >
              I began as a teller but quickly was asked to join anther
              department. I became apart of the virtual teller where I became a
              closing supervisor.
            </div>
          </div>
        </div>
        <div
          className="section2-full-wrapper"
          style={{
            width: "100%",
            height: "100%",
            padding: "10px",
          }}
        >
          <div
            className="section2-bothsides-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "25% 70%",
              width: "100%",
              gap: "0px",
            }}
          >
            <div
              className="section2left-wrapper"
              style={{
                borderRight: "1px solid black",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="section2left-grid/words-wrapper"
                style={{
                  display: "grid",
                  gridAutoColumns: "100%",
                  gap: "0px",
                }}
              >
                <span>June 2020- July 2020</span>
                <hr style={{ width: "100%" }}></hr>
                <span>Ascent Law</span>
                <span>Office Administrator, Collections, Accounting</span>
              </div>
            </div>
            <div
              className="section2Right-words-wrapper"
              style={{
                width: "100%",
                heigh: "100%",
                padding: "20px 20px",
              }}
            >
              Mainly I made collections calls, but I was also taught some
              accounting. I would spend a certain amount of time during the day
              at the fron desk as well.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
