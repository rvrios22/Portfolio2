import React from "react";

import "./tech-stack.css";
import { imageMap } from "../../mappingData";

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h2 className="tech-header">Technologies I Use:</h2>
      <p className="tech-text">
        I am well versed in web development with a focus on frontend
        development, responsive design, and the use of frontend libraries.
      </p>
      <p className="tech-text">
        I am also knowledgeable in relational databases and version control.
      </p>
      <div className="tech-grid-container">
        {imageMap.map((tech) => (
          <div className="tech-image-container gradient-border" key={tech.name}>
            <img
              src={`./${tech.imageName}.png`}
              alt={tech.name}
              className="tech-image"
            />
            <h2 className="tech-title">{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
