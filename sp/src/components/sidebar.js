import React from 'react'
import Attendance from './attendance'

export default function sidebar() {
  return (
    <div>
      <div class="sidebar">
            <div class="profileImg">
                <img src="/PFP.jpg" alt="Profile" />

            </div>
            <div class="username">
                <p class="text-center my-3">Gadapa Raghavendra</p>
            </div>
            <nav class="navbar">
                <ul class="nav flex-column">
                    <li class="nav-item"><a href="/"><i class="fa-solid fa-border-all mx-2"></i> Dashboard</a></li>
                    <li class="nav-item"><a href="attendance.html"><i class="fa-solid fa-bars-progress mx-2"></i> Attendance Manager</a></li>
                    <li class="nav-item"><a href="/"><i class="fa-solid fa-gear mx-2"></i> CGPA Generator</a></li>
                    <li class="nav-item"><a href="/"><i class="fa-solid fa-book-open mx-2"></i> Study Materials</a></li>
                    {/* <li class="nav-item"><a href="/"><i class="fa-solid fa-hourglass-end mx-2"></i> Pomodoro Timer</a></li> */}
                    {/* <li class="nav-item"><a href="/"><i class="fa-solid fa-list-check mx-2"></i> To-Do List</a></li> */}
                    <li class="nav-item"><a href="/"><i class="fa-regular fa-user mx-2"></i> Profile</a></li>
                    <li class="nav-item"><a href="/"><i class="fa-solid fa-right-from-bracket mx-2"></i> Log out</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
