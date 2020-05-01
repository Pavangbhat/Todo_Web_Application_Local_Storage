import React, { useState, useEffect } from "react";
import TodoForms from "./Components/TodosForms";
import "./App.css";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let localStoagreData = localStorage.getItem("todos");
    if (localStoagreData) {
      setTodos(JSON.parse(localStoagreData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const markComplete = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoForms addTodo={addTodo} />
      <Todos todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
