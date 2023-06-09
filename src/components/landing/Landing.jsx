import React from "react";

import "./landing.css";

function Landing() {
  return (
    <div className="color-container">
      <div className="landing-container">
        <div className="name-container">
          <span className="hello">I'm</span>
          <h1 className="name color-change">RAFAEL RIOS</h1>
        </div>

        <div className="bio-container">
          <p className="bio-text">
            I'm a frontend developer with a passion for optimization and great
            user experiences.
          </p>
          <p className="bio-text">
            I love to solve problems and to bring thoughts to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
