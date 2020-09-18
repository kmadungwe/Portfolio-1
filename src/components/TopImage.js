import React, { useState } from "react";
import Pic from "./image/Pic.png";

const TopImage = () => {
  function changeBackground(yebo) {
    yebo.target.style.background = "#89d5d2";
  }
  return (
    <div
      style={{
        backgroundImage: `url(${Pic})`,
        backgroundSize: `cover`,
        height: "100vh",
        width: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateRows: "490px 17px",
        fontSize: "2rem",
      }}
    >
      <a
        onMouseOver={changeBackground}
        style={{
          textDecoration: "none",
          color: "black",
          border: "1px solid black",
          padding: "20px",
        }}
        href={"#links-wrapper"}
      >
        Katelynn Clark
      </a>
    </div>
  );
};

export default TopImage;
