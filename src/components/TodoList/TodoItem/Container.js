import React from "react";

import { AppConsumer } from "../../../contexts/app";
import TodoItem from "./TodoItem";

export default class TodoItemContainer extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <AppConsumer>
        {context => <TodoItem data={data} onSubmit={context.toggle} />}
      </AppConsumer>
    );
  }
}
