import React, { useState } from 'react';
import './Todo.css'; 

export default function Todo() {
  const [taskInput, setTaskInput] = useState(''); 
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); 
  };

  const removeAll = () =>{
    setTasks([])
  }

  return (
    <div className="container">
      <input
        type="text"
        className='form-control'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <div className="buttons">
      <button className='btn btn-primary my-2' onClick={addTask}>Add task</button>
      <button className='btn btn-danger mx-2 my-2' onClick={removeAll}>Clear All</button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => ( // Render the list of tasks
          <div key={index} className="task-item">
            {task}
            <button className="remove-btn" onClick={() => removeTask(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
