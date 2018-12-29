import React from "react";

import { AppConsumer } from "../../contexts/app";
import AddTodo from "./AddTodo";

export default () => {
  return (
    <AppConsumer>
      {context => (
        <AddTodo
          data={context.app.getIn(["form", "todo"])}
          onSubmit={context.add}
          onChange={context.updateFormValues}
        />
      )}
    </AppConsumer>
  );
};
