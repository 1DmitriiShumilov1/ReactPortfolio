import React from "react";
import Profiles from "./common/profiles";

const Introduction = () => {
  return (
    <div id="intro" className="container introduction pb-5">
      <div className="img-container">
        <img src="/intro.jpg" className="img-fluid br-50" alt="intro" />
      </div>
      <p className="fs-4 text-success fw-bold">Welcome to my portfolio!</p>
      <p className="w-30-70 text-center text-secondary">
        I'm a Front End Web Developer who's passionate about learning and
        improving his skills.
      </p>
      <div className="skills mt-4">
        <img className="mx-2 px-48" src="/skills-logo/html.png" alt="html" />
        <img className="mx-2 px-48" src="/skills-logo/css.png" alt="css" />
        <img className="mx-2 px-48" src="/skills-logo/js.png" alt="js" />
        <img className="mx-2 px-48" src="/skills-logo/react.png" alt="react" />
        <img
          className="m-2 px64 px-48"
          src="/skills-logo/bootstrap-logo.svg"
          alt="bootstrap"
        />
      </div>
      <div className="divider-light"></div>
      <Profiles footer={false} />
    </div>
  );
};

export default Introduction;
