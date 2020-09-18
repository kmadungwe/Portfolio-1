import React from "react";

const Projects = () => {
  return (
    <div id="projects-wrapper">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#484848",
          height: "100vh",
        }}
      >
        Projects
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          justifySelf: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridGap: "20px",
          fontWeight: "500",
          fontSize: "1.35rem",
          height: "500px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ededed",
            padding: "20px 20px",
            border: "5px solid black",
            borderRadius: 5,
            fontSize: "25px",
          }}
        >
          My name is Katelynn Clark, but most people call me Katey. I have
          learned bits of a few languages including but not limited to Shona,
          N'debele, Swahili, Portuguese, Spanish. Obviously I can't leave out
          the coding languages that I also know bits of. These languages include
          Javascript, Python, HTML, CSS, React.
        </div>
        <div
          style={{
            backgroundColor: "#ededed",
            padding: "20px 20px",
            border: "5px solid black",
            borderRadius: 5,
            fontSize: "25px",
          }}
        >
          <a href={"#allSections-wrapper"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src={require(`./image/IMG_0332.png`)}
            ></img>
          </a>
        </div>
        <div
          style={{
            backgroundColor: "#ededed",
            padding: "20px 20px",
            border: "5px solid black",
            borderRadius: 5,
            display: "grid",
          }}
        >
          <div>Name:Katelynn Clark</div>
          <div>Email: katelynn.clark333@gmail.com</div>
          <div>Telephone:385-337-8533</div>
        </div>
        <div>number one</div>
        <div>Number two</div>
        <div>Number 3</div>
      </div>
      <div
        className="contact-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "500",
          margin: "20px 20px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          Name: Katelynn Clark
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          Email: katelynn.clark333@gmail.com
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          Telephone: 385-337-8533
        </div>
      </div>
    </div>
  );
};

export default Projects;
