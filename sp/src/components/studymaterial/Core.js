import React from 'react'
import './Core.css'; 
export default function Core() {
  return (
    <div>
       <div class="box-container">
        <p class="hover">
        <h1 class="hover1">Core Computer Science</h1>
        <img id="img"  src="image/coreb.png" alt="dsa"/>
    </p>
</div>
<div class="card-container">
    <div class="card" >
        <img src="image/core1.svg" alt="TECH" />
        <div class="card-body">
          <a href="core1.html"class="btn">OPERTING SYSTEM INTERVIEW QUESTIONS</a>
        </div>
      </div>
      <div class="card" >
        <img src="image/core2.svg"  alt="NON TECH"/>
        <div class="card-body">
          <a href="core2.html" class="btn ">DBMS INTERVIEW QUESTIONS</a>
        </div>
      </div>
      <div class="card" >
        <img src="image/core3.svg"  alt="NON TECH"/>
        <div class="card-body">
          <a href="core3.html" class="btn ">COMPUTER NETWORKS INTERVIEW QUESTIONS</a>
        </div>
      </div>
    </div>
    </div>
  )
}
