import React from "react";

const TopNavBar = () => {
  return (
    <div>
      <div>
        <div
          id="links-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            fontSize: "25px",
            backgroundColor: "#89d5d2",
            padding: "20px 20px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href={"#everything-wrapper"}
          >
            About
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href={"#OfficialExperience"}
          >
            Experience
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href={"#fullContact"}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
