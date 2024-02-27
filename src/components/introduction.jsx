import React from "react";
import Profiles from "./common/profiles";

const Introduction = () => {
  return (
    <div className="container introduction pb-5">
      <div className="img-container">
        <img src="/intro.jpg" className="img-fluid br-50" alt="intro" />
      </div>
      <p className="fs-4 text-success fw-bold">Welcome to my personal page</p>
      <p className="w-30-70 text-center text-secondary">
        I enjoy studying, working out, and spending good time with friends.
      </p>
      <div className="skills mt-4">
        <img className="mx-2 px-48" src="/skills-logo/html.png" alt="html" />
        <img className="mx-2 px-48" src="/skills-logo/css.png" alt="css" />
        <img className="mx-2 px-48" src="/skills-logo/js.png" alt="js" />
        <img className="mx-2 px64 px-48" src="/skills-logo/java-test.png" alt="java" />
        <img className="mx-2 px64 px-48" src="/skills-logo/c.png" alt="c" />
        <img className="mx-2 px-48" src="/skills-logo/react.png" alt="react" />
      </div>
      <div className="divider-light"></div>
      <Profiles footer={false} />
    </div>
  );
};

export default Introduction;
