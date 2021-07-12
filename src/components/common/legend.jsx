import React, { Component } from "react";

import { getHeaderHeight } from "../header";
import { getIntroductionHeight } from "../introduction";

class Legend extends Component {
  state = {
    divHeight: this.props,
  };

  componentDidMount() {
    setTimeout(() => {
      const headerHeight = getHeaderHeight();
      const introductionHeight = getIntroductionHeight();
      const projectsHeight = this.props.height;
      console.log(projectsHeight);

      this.setState({ home: 0 });
      this.setState({ intro: headerHeight });
      this.setState({ projects: headerHeight + introductionHeight });
      this.setState({
        about: headerHeight + introductionHeight + projectsHeight,
      });
    }, 800);
    return;
  }

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
      </div>
    );
  }
}

export default Legend;
