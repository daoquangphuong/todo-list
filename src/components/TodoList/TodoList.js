import React from "react";

import TodoItemContainer from "./TodoItem/Container";

import "./styles.css";

export default ({ dataMap, data }) => {
  return data.map(id => <TodoItemContainer key={id} data={dataMap[id]} />);
};
