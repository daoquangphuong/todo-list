import React from "react";

import { AppConsumer } from "../../contexts/app";
import AddTodo from "./AddTodo";

export default () => {
  return (
    <AppConsumer>
      {context => (
        <AddTodo
          data={context.app.getIn(["form", "todo"]).toJS()}
          onSubmit={context.add}
          onChange={context.updateFormValues("todo")}
        />
      )}
    </AppConsumer>
  );
};
