import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(task.name);
  
    const handleEdit = () => {
        editTask(task.id, newName);
        setEditing(false);
    };
  
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {editing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            ) : (
                <span
                    style={{ textDecoration: task.completed ? "line-through" : "none" }}
                >
                    {task.name}
                </span>
            )}
            <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            {editing ? (
                <button onClick={handleEdit}>Save</button>
            ) : (
                <button onClick={() => setEditing(true)}>Edit</button>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
