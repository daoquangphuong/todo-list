import React from "react";

import MyTextInput from "../MyTextInput/MyTextInput";

export default ({ data, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <MyTextInput
        value={data.text}
        onChange={event => {
          onChange({ ...data, text: event.target.value });
        }}
        placeholder="Enter todo name here"
      />
    </form>
  );
};
