import React from "react";

import "./tech-stack.css";
import { imageMap } from "../../mappingData";

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h1>Technologies I Use:</h1>
      <p>
        I am well versed in web development with a focus on frontend
        development, responsive design, and the use of frontend libraries.
      </p>
      <p>
        I am also knowledgeable in relational databases and version control.
      </p>
      <div className="tech-grid-container">
        {imageMap.map((tech) => (
          <div className="tech-image-container gradient-border">
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
