import React from "react";

import "./projects.css";
import { projectMap } from "../../mappingData";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="project-title">Projects I've Worked On</h2>
      <div className="project-grid-container">
        {projectMap.map((project) => (
          <div className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
