import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./contexts/app";
import AddTodoContainer from "./components/AddTodo/Container";
import TodoListContainer from "./components/TodoList/Container";
import TodoFilterContainer from "./components/TodoFilter/Container";
import ToggleAllContainer from "./components/ToggleAll/Container";

import "./styles.css";

function App() {
  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <AddTodoContainer />
      <TodoListContainer />
      <ToggleAllContainer />
      <TodoFilterContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);
