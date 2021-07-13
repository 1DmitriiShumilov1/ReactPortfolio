import React, { Component } from "react";
import { getProjects } from "./'services'/fakeDataService";

import img_musician from "../img/projects/musician.jpg";
import img_weather from "../img/projects/weather.jpg";
import img_javascript from "../img/projects/javascript.jpg";
import img_ticTacToe from "../img/projects/ticTacToe.bmp";
import img_restaurant from "../img/projects/restaurant.jpg";
import img_blocks from "../img/projects/blocks.jpg";
import img_violin from "../img/projects/violin.jpg";

class Projects extends Component {
  state = {
    projects: getProjects(),
    images: [
      img_musician,
      img_weather,
      img_javascript,
      img_ticTacToe,
      img_restaurant,
      img_blocks,
      img_violin,
    ],
  };

  render() {
    return (
      <div id="projects">
        <h1 className="text-center my-5 main-title">My Projects</h1>
        <div className="projects m-auto">
          {[...this.state.projects].map((project) => {
            return (
              <div key={project._key}>
                <div className="container-project text-secondary">
                  <h3 className="mobile-add fw-bold text-primary">
                    {project.name}
                  </h3>
                  <div className="intro p-3">
                    <div className="img-wrapper m-auto br-50">
                      <img
                        className="project-img br-50"
                        src={this.state.images[project.img_index]}
                        alt="project-img"
                      />
                    </div>
                    <div className="m-2 mt-3 text-center">
                      {project.links.code === undefined ? null : (
                        <a
                          className="mobile-remove text-decoration-none p-2"
                          href={project.links.code}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button className="btn btn-primary">Code</button>
                        </a>
                      )}
                      <a
                        className="mobile-remove text-decoration-none p-2"
                        href={project.links.page}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="btn btn-secondary">Webpage</button>
                      </a>
                    </div>
                  </div>
                  <div className="about-project p-3">
                    <div className="width-75-100">
                      <h3 className="mobile-remove fw-bold text-primary">
                        {project.name}
                      </h3>
                      <p className="about-description">{project.description}</p>
                    </div>
                    <div className="challenges w-80">
                      <p className=" fw-bold text-danger">Challenges</p>
                      <li>{project.challenges.first}</li>
                      <li className="mb-4">{project.challenges.second}</li>
                    </div>
                    <div className="used-technologies-container w-75">
                      <p className=" fw-bold margin-top-auto text-dark">
                        Used Technologies
                      </p>
                      <div className="used-technologies">
                        {project.usedTechnologies}
                      </div>
                    </div>
                  </div>
                  <div className="m-2 mt-3 text-center btn-container">
                    {project.links.code === undefined ? null : (
                      <a
                        className="mobile-add text-decoration-none p-2"
                        href={project.links.code}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="btn btn-primary">Code</button>
                      </a>
                    )}
                    <a
                      className="mobile-add text-decoration-none p-2"
                      href={project.links.page}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="btn btn-secondary">Webpage</button>
                    </a>
                  </div>
                </div>
                {project.name !== "Violin Store" ? (
                  <div className="divider"></div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
