import React from "react";
import { projectMap } from "../../mappingData";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./project.css";

function Project() {
  const { id } = useParams();
  const project = projectMap[id];

  return (
    <div className="project-container">
      <div className="top-child">
        <div className="back-arrow">
          <Link to="/">
            <img src="../arrow.png" alt="" />
          </Link>
        </div>
        <h1 className="project-header">{project.name}</h1>
        <img
          src={`../${project.image}.png`}
          alt={`${project.name}'s Website`}
          className="route-project-image"
        />
        <p className="route-project-desc">{project.desc}</p>
        <div className="route-project-links-container">
          <div className="github-link">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../github.png" alt={`${project.name}'s repository`} />
            </a>
          </div>
          <div className="active-link">
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <img src="../link.png" alt={`link to ${project.name}`} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-child">
        <Footer />
      </div>
    </div>
  );
}

export default Project;
