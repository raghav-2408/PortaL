
import React from "react";
import "./tech2.css"; 

const Tech= () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src="image/carrer.svg" alt="Career Advice" />
          <div className="card-body">
            <p className="card-text">Career Advice for Software Developers</p>
            <a href="carrer.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/problem.svg" alt="Problem Solving" />
          <div className="card-body">
            <p className="card-text">Problem Solving, Data Structures & Algorithms</p>
            <a href="dsa.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/system2.svg" alt="System Design" />
          <div className="card-body">
            <p className="card-text">System Design and Architecture (HLD)</p>
            <a href="system.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/backend.svg" alt="Backend Development" />
          <div className="card-body">
            <p className="card-text">Backend Development</p>
            <a href="backend.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/frontend.svg" alt="Frontend Development" />
          <div className="card-body">
            <p className="card-text">Frontend Development</p>
            <a href="frontend.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/core.svg" alt="Core Computer Science" />
          <div className="card-body">
            <p className="card-text">Core Computer Science</p>
            <a href="core.html" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/project.svg" alt="Project Ideas" />
          <div className="card-body">
            <p className="card-text">Awesome Project Ideas for Software Developers</p>
            <a href="projects.html" className="btn">VIEW</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
