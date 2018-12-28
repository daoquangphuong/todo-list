import React from "react";

import { AppConsumer } from "../../contexts/app";
import TodoList from "./TodoList";

export default () => {
  return (
    <AppConsumer>
      {context => (
        <TodoList
          dataMap={context.app.get("todoMap").toJS()}
          data={context.app.get("todoIdList").toJS()}
        />
      )}
    </AppConsumer>
  );
};
