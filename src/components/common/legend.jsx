import React, { Component } from "react";

class Legend extends Component {
  state = {
    home: 0,
    intro: 300,
    projects: 1014,
    about: 4820,
  };

  navigate(location) {
    window.scrollTo(0, this.state[location]);
  }

  render() {
    return (
      <div className="legend text-secondary text-end">
        <div onClick={() => this.navigate("home")} className="legend-nav">
          Home
        </div>
        <div onClick={() => this.navigate("intro")} className="legend-nav">
          Intro
        </div>
        <div onClick={() => this.navigate("projects")} className="legend-nav">
          Projects
        </div>
        <div onClick={() => this.navigate("about")} className="legend-nav">
          About
        </div>
        <p className="text-secondary m-0 small">*beta</p>
      </div>
    );
  }
}

export default Legend;
