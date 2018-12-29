import React from "react";

import MyButton from "../MyButton/MyButton";

export default class DeleteTodo extends React.PureComponent {
  render() {
    const { data, onSubmit } = this.props;
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
  }
}
