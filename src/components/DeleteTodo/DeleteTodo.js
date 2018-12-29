import React from "react";

import MyButton from "../MyButton/MyButton";

export default ({ data, onSubmit }) => {
  return (
    <MyButton
      onClick={() => {
        if (
          window.confirm(
            `Are you sure to delete this TODO: ${data.get("text")}`
          )
        ) {
          onSubmit(data);
        }
      }}
      color="red"
    >
      x
    </MyButton>
  );
};
