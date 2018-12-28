import React from "react";

import MyButton from "../MyButton/MyButton";

export default ({ data, onSubmit }) => {
  return (
    <MyButton
      onClick={() => {
        if (window.confirm(`Are you sure to delete this TODO: ${data.text}`)) {
          onSubmit();
        }
      }}
      color="red"
    >
      x
    </MyButton>
  );
};
