import React, { useState , useEffect } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import "./App.css";
const App = () => {
  // const [tasks, setTasks] = useState([]);
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   console.log(storedTasks)
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // Initialize tasks state with data from localStorage or an empty array if no data exists
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  });

  // Effect to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
