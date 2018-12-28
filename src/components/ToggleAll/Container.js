import React from "react";

import { AppConsumer } from "../../contexts/app";
import ToggleAll from "./ToggleAll";

export default () => {
  return (
    <AppConsumer>
      {context => <ToggleAll onSubmit={context.toggleAll} />}
    </AppConsumer>
  );
};
