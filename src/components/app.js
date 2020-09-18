import React, { Component } from "react";
import Projects from "./Projects";
import Contact from "./OfficialContact";
import About from "./AboutMe";
import TopNavBar from "./TopNavBar";
import TopImage from "./TopImage";
import OfficialExperience from "./OfficialExperience";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TopImage />
        <TopNavBar />
        <About />
        <OfficialExperience />
        <Contact />
        <TopNavBar />
      </div>
    );
  }
}
