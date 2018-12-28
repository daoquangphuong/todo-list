import React from "react";

import { AppConsumer } from "../../../contexts/app";
import TodoItem from "./TodoItem";

export default ({ data }) => {
  return (
    <AppConsumer>
      {context => <TodoItem data={data} onSubmit={context.toggle(data)} />}
    </AppConsumer>
  );
};
