import React from 'react';

const ToDoTask = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ToDoTask;
