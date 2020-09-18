import React from "react";

const Contact = () => {
  return (
    <div
      id="fullContact"
      style={{
        backgroundColor: "rgb(34, 34, 34)",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#cdcdcd",
          padding: "20px 20px",
        }}
      >
        Contact
      </h1>

      <div
        className="RightColumn"
        style={{
          display: "grid",
          gridTemplateRows: "200px 200px 200px",
          gridTemplateColumns: "50%",
          justifyContent: "center",
          gridGap: "10px",
          fontSize: "2rem",
        }}
      >
        <div
          className="top"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "100%",
            backgroundColor: "#ededed",
            borderRadius: "125px",
            justifyContent: "center",
          }}
        >
          Name: Katelynn Clark
        </div>
        <div
          className="middle"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "100%",
            backgroundColor: "#ededed",
            borderRadius: "125px",
            justifyContent: "center",
          }}
        >
          Email: katelynn.clark333 @gmail.com
        </div>
        <div
          className="bottom"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "100%",
            backgroundColor: "#ededed",
            borderRadius: "125px",
            justifyContent: "center",
          }}
        >
          Telephone: 385-337-8533
        </div>
      </div>
    </div>
  );
};
export default Contact;
