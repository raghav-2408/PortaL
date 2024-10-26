import React, { useRef, useEffect } from 'react';
import './Pomodoro.css'; // Make sure to include CSS for styling

export default function Pomodoro() {
  const timerRef = useRef(null);
  const timeLeftRef = useRef(25 * 60); // 25 minutes in seconds
  const isActiveRef = useRef(false);
  const isBreakRef = useRef(false);
  const displayRef = useRef(null); // Reference to the timer display

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const startTimer = () => {
    if (isActiveRef.current) return; // Prevent starting a new timer if already active
    isActiveRef.current = true;

    timerRef.current = setInterval(() => {
      if (timeLeftRef.current > 0) {
        timeLeftRef.current -= 1;
        displayRef.current.innerText = formatTime(timeLeftRef.current);
      } else {
        // Switch to break after work session
        isBreakRef.current = !isBreakRef.current;
        timeLeftRef.current = isBreakRef.current ? 5 * 60 : 25 * 60; // Switch between 25 mins and 5 mins
        displayRef.current.innerText = formatTime(timeLeftRef.current);
      }
    }, 1000);
  };

  const pauseTimer = () => {
    isActiveRef.current = false;
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    isActiveRef.current = false;
    clearInterval(timerRef.current);
    isBreakRef.current = false;
    timeLeftRef.current = 25 * 60; // Reset to 25 minutes
    displayRef.current.innerText = formatTime(timeLeftRef.current);
  };

  return (
    <div className="pomodoro-timer">
      <h1>{isBreakRef.current ? "Break Time!" : "Focus Time!"}</h1>
      <div className="timer" ref={displayRef}>
        {formatTime(timeLeftRef.current)}
      </div>
      <div className="controls">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
