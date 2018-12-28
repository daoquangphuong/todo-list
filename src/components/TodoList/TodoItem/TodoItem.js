import React from "react";

import MyCheckbox from "../../MyCheckbox/MyCheckbox";
import DeleteTodoContainer from "../../DeleteTodo/Container";

import constants from "../../../constants";
import "./styles.css";

export default ({ data, onSubmit }) => {
  const isChecked = data.status === constants.DONE;
  return (
    <div>
      <MyCheckbox
        onChange={() => {
          if (
            window.confirm(
              `Are you sure to ${isChecked ? "uncheck" : "check"} this TODO: ${
                data.text
              }`
            )
          ) {
            onSubmit();
          }
        }}
        checked={isChecked}
        label={data.text}
      />
      <DeleteTodoContainer data={data} />
    </div>
  );
};
