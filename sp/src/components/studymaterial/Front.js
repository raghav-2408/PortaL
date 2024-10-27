import React from "react";
import "./tech2.css"; 
const Front = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src="image/tech.svg" alt="TECH" />
          <div className="card-body">
            <p className="card-text">TECHNICAL</p>
            <a href="Tech.js" className="btn">VIEW</a>
          </div>
        </div>
        <div className="card">
          <img src="image/nontech.svg" alt="NON TECH" />
          <div className="card-body">
            <p className="card-text">NON TECHNICAL</p>
            <a href="/nontech" className="btn">VIEW</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;