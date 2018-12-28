import React from "react";

import MyButton from "../MyButton/MyButton";

export default ({ onSubmit }) => {
  return (
    <MyButton
      onClick={() => {
        if (window.confirm(`Are you sure to toggle all TODOs`)) {
          onSubmit();
        }
      }}
      color="blue"
    >
      Toggle All
    </MyButton>
  );
};
