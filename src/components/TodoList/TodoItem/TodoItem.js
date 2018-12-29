import React from "react";

import MyCheckbox from "../../MyCheckbox/MyCheckbox";
import DeleteTodoContainer from "../../DeleteTodo/Container";

import constants from "../../../constants";
import "./styles.css";

export default class TodoItem extends React.PureComponent {
  render() {
    const { data, onSubmit } = this.props;
    const isChecked = data.get("status") === constants.DONE;
    const text = data.get("text");
    return (
      <div>
        <MyCheckbox
          onChange={() => {
            if (
              window.confirm(
                `Are you sure to ${
                  isChecked ? "uncheck" : "check"
                } this TODO: ${text}`
              )
            ) {
              onSubmit(data);
            }
          }}
          checked={isChecked}
          label={text}
        />
        <DeleteTodoContainer data={data} />
      </div>
    );
  }
}
