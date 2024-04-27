import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState()
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!taskName || !taskName.trim()) {
        setErrorMessage("Task name cannot be empty. Please enter a valid task name.");
        return;
      }
      addTask(taskName);
      setTaskName("");
      setErrorMessage("");
    };
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {errorMessage && <p style={{ color: "black" }}>{errorMessage}</p>}
      </div>
    );
  };

export default TaskForm
