import React from "react";

import "./projects.css";
import { projectMap } from "../../mappingData";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects I've Worked On</h2>
      {projectMap.map((project) => (
        <div>
          <div className="project-image-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="project-image"
                src={`./${project.image}.png`}
                alt={`${project.name} Website`}
              />
            </a>
            <h3>{project.name}</h3>
            <div className="project-desc-container">
              <p className="project-desc">{project.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
