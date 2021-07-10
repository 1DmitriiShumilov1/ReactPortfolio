import React from "react";

const Profiles = (props) => {
  return (
    <div
      className={props.footer === false ? "social-media" : "social-media mt-0"}
    >
      {props.footer === false ? (
        <p className="fs-5 m-0">Useful links (:</p>
      ) : (
        <p className="text-light fs-4 m-0">Dmitrii Shumilov</p>
      )}
      <div className="flex">
        <a
          className={window.innerWidth < 500 ? "m-3" : "m-4"}
          href="https://drive.google.com/file/d/1dl2aHJyN1AlmsFyOYbgAWELvfA25jOe9/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          title="resume"
        >
          <i className="text-center bi bi-file-earmark-arrow-down fa-3x m-auto"></i>
        </a>
        <a
          className={window.innerWidth < 500 ? "m-3" : "m-4"}
          href="https://github.com/1DmitriiShumilov1/"
          rel="noreferrer"
          target="_blank"
          title="github"
        >
          <i className="bi bi-github fa-3x"></i>
        </a>
        <a
          className={window.innerWidth < 500 ? "m-3" : "m-4"}
          href="https://www.linkedin.com/in/dima-shumilov/"
          rel="noreferrer"
          target="_blank"
          title="linkedIn"
        >
          <i className="bi bi-linkedin fa-3x"></i>
        </a>
        <a
          className={window.innerWidth < 500 ? "m-3" : "m-4"}
          href="mailto:11.dimashumilov.11@gmail.com?"
          rel="noreferrer"
          target="_blank"
          title="mail"
        >
          <i className="bi bi-envelope fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Profiles;
