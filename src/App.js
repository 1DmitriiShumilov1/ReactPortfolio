import React, { Component } from "react";
import Header from "./components/header";
import Projects from "./components/projects";
import Introduction from "./components/introduction";
import AboutMe from "./components/about";
import Profiles from "./components/common/profiles";
import Legend from "./components/common/legend";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Introduction />
        <Projects />
        <AboutMe classes="text-center m-auto container" />
        <div className="footer bg-dark curved-top">
          <Profiles footer={true} />
        </div>
        <Legend />
      </>
    );
  }
}

export default App;
