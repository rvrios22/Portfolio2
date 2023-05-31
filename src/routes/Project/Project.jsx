import React from "react";
import { projectMap } from "../../mappingData";

import { useParams } from "react-router-dom";

function Project() {
  const { id } = useParams();
  const project = projectMap[id];

  return (
    <div>
      <h1>{project.name}</h1>
      <img src={`../${project.image}.png`} alt={`${project.name}'s Website`} />
      <p>{project.desc}</p>
    </div>
  );
}

export default Project;
