import React from "react";

const Profiles = (props) => {
  return (
    <div
      className={props.footer === false ? "social-media" : "social-media mt-0"}
    >
      {props.footer === false ? (
        <p className="fs-5 m-0">Useful links</p>
      ) : (
        <p className="text-light fs-4 m-0">Dmitrii Shumilov</p>
      )}
      <div className="flex">
        <a
          className={window.innerWidth < 500 ? "m-3" : "m-4"}
          href="https://docs.google.com/document/d/1njsPEYoBkDA9_2aPIBbIsoS3DaDDOM9G/edit?usp=share_link&ouid=110619298021611067348&rtpof=true&sd=true"
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
          href="mailto:11.dimashumilov.11@gmail.com?"
          rel="noreferrer"
          target="_blank"
          title="email"
        >
          <i className="bi bi-envelope fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Profiles;
