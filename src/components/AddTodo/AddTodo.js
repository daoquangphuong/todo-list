import React from "react";

import MyTextInput from "../MyTextInput/MyTextInput";

export default class AddToDo extends React.PureComponent {
  render() {
    const { data, onChange, onSubmit } = this.props;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <MyTextInput
          value={data.get("text")}
          onChange={event => {
            onChange("todo", "text", event.target.value);
          }}
          placeholder="Enter todo name here"
        />
      </form>
    );
  }
}
