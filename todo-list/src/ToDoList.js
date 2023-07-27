import React, { useState } from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTask = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <ToDoTask
            key={index}
            task={todo}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
