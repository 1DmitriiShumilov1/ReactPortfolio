import React from "react";

const Legend = () => {
  return (
    <div className="legend text-secondary text-end">
      <a className="link-scroll" href="#home">
        <p className="m-0 p-2">Home</p>
      </a>
      <a className="link-scroll" href="#intro">
        <p className="m-0 p-2">Intro</p>
      </a>
      <a className="link-scroll" href="#projects">
        <p className="m-0 p-2">Projects</p>
      </a>
      <a className="link-scroll" href="#about">
        <p className="m-0 p-2">About</p>
      </a>
    </div>
  );
};

export default Legend;
