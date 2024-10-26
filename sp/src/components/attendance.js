import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Import Chart.js
import './attendance.css'

export default function Attendance() {
  const present = 140;
  const absent = 61;
  const total = present + absent;
  const winPercentage = ((present / total) * 100).toFixed(2);

  useEffect(() => {
    const ctx = document.getElementById('winChart').getContext('2d');

    // Initialize the chart
    const winChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent'],
        datasets: [{
          data: [present, absent],
          backgroundColor: ['#28a745', '#dc3545'],
          borderWidth: 5,
          hoverOffset: 8
        }]
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          }
        },
        rotation: 107.5,
        cutout: '73%', // thickness 
        responsive: true,
        maintainAspectRatio: false, // Disable to allow custom dimensions
      }
    });

    // Cleanup chart instance when component unmounts
    return () => {
      winChart.destroy();
    };
  }, [present, absent]); // Ensure useEffect runs only when win/loss values change

  useEffect(() => {
    document.getElementById('percentageLabel').innerHTML = winPercentage + '<small style="font-size: 22px;"> %</small>';
  }, [winPercentage]);

  return (
    <div>
      <div className="container">
        <div className="chart-container" style={{ position: 'relative', width: '250px', height: '250px' }}>
          <canvas id="winChart"></canvas>
          <div className="chart-label" id="percentageLabel"></div>
        </div>
      </div>
    </div>
  );
}
