import React from "react";

import { AppConsumer } from "../../contexts/app";
import DeleteTodo from "./DeleteTodo";

export default class DeleteTodoContainer extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <AppConsumer>
        {context => <DeleteTodo data={data} onSubmit={context.del} />}
      </AppConsumer>
    );
  }
}
