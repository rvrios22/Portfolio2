import React from "react";

import { Link } from "react-router-dom";

import "./projects.css";
import { projectMap } from "../../mappingData";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="project-title">Projects I've Worked On</h2>
      <div className="project-grid-container">
        {projectMap.map((project, idx) => (
          <div key={project.shortLink}>
            <Link to={`/project/${idx}`}>
              <div className="project-card">
                <div className="project-image-container">
                  <img
                    src={`./${project.image}.png`}
                    alt={`${project.name}'s Website`}
                    className="project-image"
                  />
                </div>
                <div className="project-text">
                  <h4 className="project-name">{project.name}</h4>
                  <p className="short-link">{project.shortLink}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
