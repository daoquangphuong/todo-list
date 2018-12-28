import React from "react";

import { AppConsumer } from "../../contexts/app";
import DeleteTodo from "./DeleteTodo";

export default ({ data }) => {
  return (
    <AppConsumer>
      {context => <DeleteTodo data={data} onSubmit={context.del(data)} />}
    </AppConsumer>
  );
};
