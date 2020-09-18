import React from "react";

const About = () => {
  return (
    <div
      id="everything-wrapper"
      style={{
        backgroundColor: "#222222",
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <div
        className="About"
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#cdcdcd",
          fontSize: "25px",
          padding: "25px",
        }}
      >
        About Me
      </div>
      <div
        className="AboutMeBoxes"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 460px))",
          justifySelf: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="LeftColumn"
          style={{
            backgroundColor: "#89d5d2",
            padding: "20px 20px",
            border: "5px solid black",
            borderRadius: 5,
            fontSize: "25px",
          }}
        >
          My name is Katelynn Clark, most people call me Katey. I am in the
          pursuit of learning. My hobbies and interests include but are not
          limited to:
          <li>Code Development</li>
          <li>Music</li>
          <li>Business</li>I started my research in web development since
          October 2019. I love structure, organization, and getting things done,
          which is what drove me to coding. I have had a great mentor and
          teachers to help along the way as I have learned different coding
          languages and best practices.
        </div>

        <a className="MiddleColumn" href={"#OfficialExperience"}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "180px",
            }}
            src={require(`./image/IMG_0332.png`)}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default About;
