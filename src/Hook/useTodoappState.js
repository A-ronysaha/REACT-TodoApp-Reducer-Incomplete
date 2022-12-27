import React, { useState, useEffect }  from "react";
const { v4: uuidv4 } = require("uuid");

function Todostate() {
  const initialTodos = JSON.parse(window.localStorage.getItem("Todo")) || [
    { id: 1, task: "Clean the Floor", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem("Todo", JSON.stringify(todos));
  }, [todos]);
  return {
    todos,
    addTask: function addTodo(newTodo) {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    dltTask: function removeTodo(todoId) {
      let updtTodo = todos.filter((t) => t.id !== todoId);
      setTodos(updtTodo);
    },
    toggleTask: function toggleTodo(todoId) {
      let updtTodo = todos.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t
      );
      setTodos(updtTodo);
    },
    editTask: function editTodo(todoId, newTask) {
      let updtTodo = todos.map((t) =>
        t.id === todoId ? { ...t, task: newTask } : t
      );
      setTodos(updtTodo);
    },
  };
}

export default Todostate;
