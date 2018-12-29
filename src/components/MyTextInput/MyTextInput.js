import React from "react";

import "./styles.css";

export default class MyTextInput extends React.PureComponent {
  render() {
    const { className, ...props } = this.props;
    return (
      <input type="text" className={`inputText ${className}`} {...props} />
    );
  }
}
