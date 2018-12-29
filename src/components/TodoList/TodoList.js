import React from "react";

import TodoItemContainer from "./TodoItem/Container";

import "./styles.css";

export default class TodoList extends React.PureComponent {
  render() {
    const { dataMap, data } = this.props;
    return data.map(id => (
      <TodoItemContainer key={id} data={dataMap.get(id)} />
    ));
  }
}
