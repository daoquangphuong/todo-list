import React from "react";

import { AppConsumer } from "../../contexts/app";
import TodoFilter from "./TodoFilter";

export default () => {
  return (
    <AppConsumer>
      {context => (
        <TodoFilter
          filterBy={context.app.get("filterBy")}
          onChange={context.filter}
        />
      )}
    </AppConsumer>
  );
};
