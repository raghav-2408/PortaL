import React from 'react'
import './Frontend.css';
export default function Frontend() {
  return (
    <div>
       <div class="box-container">
        <p class="hover">
        <h1 class="hover1">Frontend Development</h1>
        <img id="img"  src="image/frontendb.png" alt="frontend"/>
    </p>
</div>
<div class="card-container">
    <div class="card" >
        <img src="image/frontend1.svg" alt="TECH" />
        <div class="card-body">
          <a href="frontend1.html"class="btn">How to prepare for Frontend Developer Interviews?</a>
        </div>
      </div>
      <div class="card" >
        <img src="image/fontend2.svg"  alt="NON TECH"/>
        <div class="card-body">
          <a href="frontend2.html" class="btn ">Top JavaScript Interview Questions and Answers</a>
        </div>
      </div>
    </div>
    </div>
  )
}
