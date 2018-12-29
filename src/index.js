import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import { AppProvider } from "./contexts/app";
import AddTodoContainer from "./components/AddTodo/Container";
import TodoListContainer from "./components/TodoList/Container";
import TodoFilterContainer from "./components/TodoFilter/Container";
import ToggleAllContainer from "./components/ToggleAll/Container";

import "./styles.css";

function App() {
  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <div className="block todoActions">
        <ToggleAllContainer />
        <TodoFilterContainer />
      </div>
      <div className="block">
        <AddTodoContainer />
      </div>

      <div className="block todoListBlock">
        <TodoListContainer />
      </div>
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
