import React from 'react'
import Attendance from './attendance'
import Todo from './Todo'
import Pomodoro from './Pomodoro'

export default function dashboard() {
    return (
        <>
            <div class="mainContent">
                <div class="searchBar">
                <div className="name">
                <p>Hello Gadapa 👋</p>
                </div>
                    <input type="text" class="form-control" placeholder="Search anything" />
                    <i class="fa-regular fa-bell mx-4"></i>
                    <i class="fa-solid fa-phone"></i>
                </div>

                <div class="boxes">

                    <div class="box1">
                        <p class="text-center">Your Attendance</p>
                        <Attendance></Attendance>
                    </div>
                    <div class="box2">
                        <p className='text-center'>To do List</p>
                        <Todo></Todo>
                    </div>

                    <div className="box3">
                        <p className='text-center'>Pomodoro Timer</p>
                        <Pomodoro></Pomodoro>
                    </div>

                </div>

                {/* <div className="boxes2">
                    <div className="box3">
                        <p className='text-center'>Pomodoro Timer</p>
                        <Pomodoro></Pomodoro>
                    </div>
                </div> */}

            </div>
        </>
    )
}
